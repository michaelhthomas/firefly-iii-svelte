import type { ICellRenderer, ICellRendererParams } from 'ag-grid-community';
import type { SvelteComponent } from 'svelte';

type ExtractData<TComponent> = TComponent extends typeof SvelteComponent<
	infer Props extends { data: unknown }
>
	? Props['data']
	: unknown;

export function createSvelteCellRenderer<
	TComponent extends typeof SvelteComponent<{ data: unknown }>
>(Component: TComponent, context?: Map<unknown, unknown>) {
	type TData = ExtractData<TComponent>;

	return class SvelteCellRenderer implements ICellRenderer<TData> {
		private instance?: InstanceType<TComponent>;
		private eGui?: HTMLDivElement;

		init(params: ICellRendererParams<TData>) {
			this.eGui = document.createElement('div');
			this.eGui.setAttribute('style', 'height: 100%;');
			if (params.data)
				this.instance = new Component({
					target: this.eGui,
					context,
					props: { data: params.data }
				}) as InstanceType<TComponent>;
		}

		refresh(params: ICellRendererParams<TData>) {
			if (!params.data) return false;

			this.instance?.$set({ data: params.data });
			return true;
		}

		destroy() {
			this.instance?.$destroy();
		}

		getGui() {
			return this.eGui;
		}
	};
}
