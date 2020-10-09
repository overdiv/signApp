<template>
  <li>
    <strong>
      {{ propsItem.title }}
    </strong>
    <p>
      {{ propsItem.contents }}
    </p>
    <span>
      {{ propsItem.createdAt }}
    </span>
  </li>
</template>

<script>
export default {
  props: {
    propsItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/var_color';
li {
  margin-top: 10px;
  padding: 13px 0;
  border-bottom: 1px solid $border-gray;

  &:first-child {
    border-top: 1px solid $border-gray;
  }
}
strong {
  display: block;
}
p {
  padding: 15px 0 30px;
  line-height: 19px;
}
span {
  display: block;
  font-size: 12px;
  color: #777;
  text-align: right;
}
</style>
