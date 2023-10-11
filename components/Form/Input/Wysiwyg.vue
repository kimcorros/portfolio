<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import Placeholder from '@tiptap/extension-placeholder'

const props = defineProps({
  modelValue: {
    type: null,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const editor = ref<Editor>()

watch(() => editor, (value) => {
  if (editor.value) {
    const isSame = editor.value.getHTML() === (value as any)

    if (isSame)
      return

    editor.value.commands.setContent(value, false)
  }
})

onMounted(() => {
  editor.value = new Editor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: props.placeholder })],
    content: props.modelValue,
    onUpdate: () => {
      emit('update:modelValue', editor.value!.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[150px]',
      },
    },
  })
})

onBeforeUnmount(() => {
  if (editor.value)
    editor.value.destroy()
})
</script>

<template>
  <div class="flex flex-col mb-4">
    <label v-if="label" class="text-black font-bold text-sm mb-1">
      {{ label }} <span v-if="required" class="text-danger"> *</span>
    </label>
    <div v-if="editor" class="border-2 border-black focus:border-primary focus:outline-2 focus:outline-primary focus:outline-offset-2 px-6 rounded-md text-sm font-bold text-black disabled:bg-opacity-80 py-4">
      <div v-if="editor" class="mb-6 flex">
        <button :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'bg-black text-white hover:text-black': editor.isActive('bold') }" class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" @click="editor.chain().focus().toggleBold().run()">
          <IconEditorBold class="h-6 w-6" />
        </button>
        <button :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'bg-black text-white hover:text-black': editor.isActive('italic') }" class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" @click="editor.chain().focus().toggleItalic().run()">
          <IconEditorItalic class="h-6 w-6" />
        </button>
        <button :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'bg-black text-white hover:text-black': editor.isActive('strike') }" class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" @click="editor.chain().focus().toggleStrike().run()">
          <IconEditorStrike class="h-6 w-6" />
        </button>
        <button :class="{ 'bg-black text-white hover:text-black': editor.isActive('paragraph') }" class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" @click="editor.chain().focus().setParagraph().run()">
          <IconEditorParagraph class="h-4 w-5" />
        </button>
        <button :class="{ 'bg-black text-white hover:text-black': editor.isActive('heading', { level: 2 }) }" class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
          <IconEditorH2 class="h-5 w-5" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :class="{ 'bg-black text-white hover:text-black': editor.isActive('heading', { level: 3 }) }" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
          <IconEditorH3 class="h-5 w-5" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :class="{ 'bg-black text-white hover:text-black': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()">
          <IconEditorBulletList class="h-5 w-5" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :class="{ 'bg-black text-white hover:text-black': editor.isActive('orderedList') }" @click="editor.chain().focus().toggleOrderedList().run()">
          <IconEditorOrderedList class="h-5 w-5" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :class="{ 'bg-black text-white hover:text-black': editor.isActive('codeBlock') }" @click="editor.chain().focus().toggleCodeBlock().run()">
          <IconEditorCode class="h-6 w-6" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :class="{ 'bg-black text-white hover:text-black': editor.isActive('blockquote') }" @click="editor.chain().focus().toggleBlockquote().run()">
          <IconEditorQuote class="h-6 w-6" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :disabled="!editor.can().chain().focus().undo().run()" @click="editor.chain().focus().undo().run()">
          <IconEditorUndo class="h-6 w-6" />
        </button>
        <button class="hover:bg-primary rounded flex justify-center items-center h-7 w-7 cursor-pointer mr-1 text-black" :disabled="!editor.can().chain().focus().redo().run()" @click="editor.chain().focus().redo().run()">
          <IconEditorRedo class="h-6 w-6" />
        </button>
      </div>
      <EditorContent :editor="editor" class="font-normal" />
    </div>
  </div>
</template>

<style lang="scss">
.ProseMirror {
  > * + * {
    @apply mt-4;
  }

  h2 { @apply text-2xl md:text-3xl }
  h3 { @apply text-xl md:text-2xl }

  ul,
  ol {
    @apply px-4;
  }

  code {
    @apply bg-gray bg-opacity-25 text-gray;
  }

  pre {
    @apply bg-black text-white hover:text-black font-mono px-4 py-3 rounded-lg;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  blockquote {
    @apply border-l-2 border-gray pl-4 border-opacity-25 text-gray;
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

  & p.is-editor-empty:first-child::before {
    @apply text-gray text-opacity-50;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }
}
</style>
