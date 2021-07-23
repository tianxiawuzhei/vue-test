<template>
  <div>
    <el-button @click="onBtnClick">默认按钮</el-button>
    <form-dialog ref="formDialog"></form-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import FormDialog from "@/components/FormDialog.vue";
import * as mockdata from "@/mock/mockdata";
type TFormDialog = InstanceType<typeof FormDialog>;
export default defineComponent({
  components: { FormDialog },
  data() {
    return {};
  },
  methods: {
    onBtnClick() {
      (this.$refs.formDialog as InstanceType<typeof FormDialog>).open(
        mockdata.pageData.records[0],
        mockdata.pageConfig.table,
        "edit",
        ""
      );
    },
  },
});
</script>
