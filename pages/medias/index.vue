<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/medias/page/1');
  },
};
</script>
