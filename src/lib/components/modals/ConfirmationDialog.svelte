<script lang="ts" context="module">
	import type { ComponentProps } from 'svelte';
	import { openModal } from 'svelte-modals';

	import ConfirmationDialog from './ConfirmationDialog.svelte';

	type ConfirmationDialogProps = Omit<ComponentProps<ConfirmationDialog>, 'isOpen'>;

	export function openConfirmationDialog(props: ConfirmationDialogProps) {
		openModal(ConfirmationDialog, props);
	}
</script>

<script lang="ts">
	import { closeModal } from 'svelte-modals';

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import Modal from './Modal.svelte';

	export let isOpen: boolean;
	export let text: string | undefined = undefined;
	export let confirmText = "Yes, I'm sure";
	export let cancelText = 'No, cancel';
	export let onConfirm: () => void = () => {};
	export let onCancel: () => void = () => {};

	function handleConfirm() {
		onConfirm();
		closeModal();
	}

	function handleCancel() {
		onCancel();
		closeModal();
	}
</script>

<Modal {isOpen} size="xs">
	<div class="text-center">
		<Icon
			icon="bx:error-circle"
			class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
		/>
		<slot>
			<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
				{text}
			</h3>
		</slot>
		<Button color="red" class="mr-2" on:click={handleConfirm}>
			{confirmText}
		</Button>
		<Button color="alternative" on:click={handleCancel}>
			{cancelText}
		</Button>
	</div>
</Modal>
