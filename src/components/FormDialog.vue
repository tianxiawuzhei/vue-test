<template>
  <div>
    <el-dialog
      :title="operatortitle"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <el-form
        ref="form"
        inline
        :model="model"
        size="small"
        :label-width="formLabelWidth"
      >
        <el-form-item
          v-for="item in headRow"
          :key="item.prop"
          :prop="item.prop"
        >
          <el-form-item>
            <span slot="label" v-html="item.title">{{ item.title }}</span>
          </el-form-item>
          <!-- :label="item.title" -->
          <el-input
            v-if="item.type == 'text' || item.type == 'link'"
            v-model="model[item.prop]"
            clearable
            :disabled="!item.editable"
          />
          <el-date-picker
            v-if="item.type == 'date'"
            v-model="model[item.prop]"
            clearable
            :disabled="!item.editable"
            style="width: 100%"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
          />
          <el-select
            v-if="item.type == 'select'"
            v-model="model[item.prop]"
            clearable
            :disabled="!item.editable"
          >
            <el-option
              v-for="(item, index) in item.children"
              :key="item.value + index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-date-picker
            v-if="item.type == 'daterange'"
            v-model="model[item.prop]"
            clearable
            :disabled="!item.editable"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetimerange"
          >
            >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitForm">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      operatortitle: "Operator",
      dialogTableVisible: false,
      dialogFormVisible: false,
      model: {
        id: null,
      },
      headRow: [] as any[],
      editable: [] as any[],
      formLabelWidth: "90px",
      type: "",
    };
  },
  methods: {
    open(row: any, config: any, type: string, prop: string) {
      this.model = { ...row };
      this.operatortitle = type;
      this.dialogFormVisible = true;
      this.headRow = config.headRow;
      this.editable = config.editableField;
      this.type = type;
      if (type == "Edit-col") {
        this.headRow = config.headRow.filter((item) => item.prop == prop);
      }
      if (type == "Add") {
        this.headRow = this.headRow.map((item) => ({
          ...item,
          editable: config.editableField.includes(item.prop),
        }));
      } else if (type != "View") {
        this.headRow = this.headRow.map((item) => ({
          ...item,
          editable: config.editableField.includes(item.prop),
        }));
      }

      if (type != "View") {
        this.headRow = this.headRow.map((item) => ({
          ...item,
          editable: config.editableField.includes(item.prop),
        }));

        // this.headRow.forEach((item) => {
        //   if (item.type == "date") {
        //     this.model[item.prop] = new Date(this.model[item.prop]);
        //   }
        // });
      }
    },

    onAdd() {},

    submitForm() {
      console.log("xxxxxxxx");
    },
  },
});
</script>
<style lang="less" scoped>
.el-dialog .el-dialog__header {
  font-weight: bolder;
}
</style>
