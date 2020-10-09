<template>
  <div>
    <h2>Note List</h2>
    <ul>
      <PostListItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :propsItem="postItem"
      />
    </ul>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api';
export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      console.log(data);
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
