<script lang="ts">
	import {
		CloseButton,
		Frame,
		type ModalPlacementType,
		type SizeType
	} from 'flowbite-svelte';
	import type { FrameProps } from 'flowbite-svelte/dist/utils/Frame.svelte';
	import { closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	import focusTrap from '$lib/utils/focus-trap';

	export let isOpen: boolean = false;
	export let title: string | undefined = undefined;
	export let size: SizeType = 'md';
	export let placement: ModalPlacementType = 'center';
	export let color: FrameProps['color'] = undefined;
	export let dismissible: boolean = true;
	export let dialogClass: string = '';
	export let frameClass: string = '';
	export let bodyClass: string = '';

	const DEFAULT_DIALOG_CLASS =
		'fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex pointer-events-none';
	const DEFAULT_FRAME_CLASS =
		'relative flex flex-col mx-auto w-full divide-y pointer-events-auto';
	const DEFAULT_BODY_CLASS = 'p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain';

	const getPlacementClasses = () => {
		switch (placement) {
			// top
			case 'top-left':
				return ['justify-start', 'items-start'];
			case 'top-center':
				return ['justify-center', 'items-start'];
			case 'top-right':
				return ['justify-end', 'items-start'];

			// center
			case 'center-left':
				return ['justify-start', 'items-center'];
			case 'center':
				return ['justify-center', 'items-center'];
			case 'center-right':
				return ['justify-end', 'items-center'];

			// bottom
			case 'bottom-left':
				return ['justify-start', 'items-end'];
			case 'bottom-center':
				return ['justify-center', 'items-end'];
			case 'bottom-right':
				return ['justify-end', 'items-end'];

			default:
				return ['justify-center', 'items-center'];
		}
	};

	const dialogCls = twMerge(
		DEFAULT_DIALOG_CLASS,
		dialogClass,
		...getPlacementClasses()
	);
	const frameCls = twMerge(DEFAULT_FRAME_CLASS, frameClass);
	const bodyCls = twMerge(DEFAULT_BODY_CLASS, bodyClass);

	const sizes = {
		xs: 'max-w-md',
		sm: 'max-w-lg',
		md: 'max-w-2xl',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl'
	};

	const hide = (e: Event) => {
		e.preventDefault();
		closeModal();
	};

	function handleKeys(e: KeyboardEvent) {
		if (e.key === 'Escape' && dismissible) return hide(e);
	}

	const isScrollable = (e: HTMLElement): boolean[] => [
		e.scrollWidth > e.clientWidth &&
			['scroll', 'auto'].indexOf(getComputedStyle(e).overflowX) >= 0,
		e.scrollHeight > e.clientHeight &&
			['scroll', 'auto'].indexOf(getComputedStyle(e).overflowY) >= 0
	];

	function prepareFocus(node: HTMLElement) {
		const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
		let n: Node | null;
		while ((n = walker.nextNode())) {
			if (n instanceof HTMLElement) {
				const el = n as HTMLElement;
				const [x, y] = isScrollable(el);
				if (x || y) el.tabIndex = 0;
			}
		}
		node.focus();
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		on:keydown={handleKeys}
		on:wheel|preventDefault|nonpassive
		use:prepareFocus
		use:focusTrap
		transition:fade|global={{ duration: 150 }}
		class={dialogCls}
		tabindex="-1"
		aria-modal="true"
		role="dialog"
	>
		<div class="flex relative {sizes[size]} w-full max-h-full">
			<!-- Modal content -->
			<Frame rounded shadow {...$$restProps} class={frameCls}>
				<!-- Modal header -->
				{#if $$slots.header || title}
					<Frame {color} class="flex justify-between items-center p-4 rounded-t">
						<slot name="header">
							<h3
								class="text-xl font-semibold {color
									? ''
									: 'text-gray-900 dark:text-white'} p-0"
							>
								{title}
							</h3>
						</slot>
						{#if dismissible}
							<CloseButton name="Close modal" on:click={hide} {color} />
						{/if}
					</Frame>
				{:else if dismissible}
					<CloseButton
						name="Close modal"
						class="absolute top-3 right-2.5"
						on:click={hide}
						{color}
					/>
				{/if}
				<!-- Modal body -->
				<div
					class={bodyCls}
					on:keydown|stopPropagation={handleKeys}
					role="document"
					on:wheel|stopPropagation|passive
				>
					<slot />
				</div>
				<!-- Modal footer -->
				{#if $$slots.footer}
					<Frame {color} class="flex items-center p-6 space-x-2 rounded-b">
						<slot name="footer" />
					</Frame>
				{/if}
			</Frame>
		</div>
	</div>
{/if}
