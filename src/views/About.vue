<template>
  <div>
    <el-button @click="onBtnClick">默认按钮</el-button>
    <form-dialog ref="formDialog"></form-dialog>
    <div>
      <draggable
        :distanceRight="100"
        :distanceBottom="100"
        :isScrollHidden="false"
        :isCanDraggable="true"
      >
        <div style="height: 50px; width: 50px; background: black">test</div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import FormDialog from "@/components/FormDialog.vue";
import Draggable from "@/components/Draggable.vue";
import * as mockdata from "@/mock/mockdata";
type TFormDialog = InstanceType<typeof FormDialog>;
export default defineComponent({
  components: { FormDialog, Draggable },
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
