<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/news/page/1');
  },
};
</script>
