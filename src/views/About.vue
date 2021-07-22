<template>
  <div>
    <el-button @click="onBtnClick">默认按钮</el-button>
    <form-dialog v-bind:dialogVisible="visible"></form-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import FormDialog from "@/components/FormDialog.vue";
export default defineComponent({
  components: { FormDialog },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onBtnClick() {
      debugger;
      this.visible = true;
    },
  },
});
</script>
