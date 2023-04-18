<script>
export default {
  middleware({ redirect, i18n }) {
    if(i18n.locale == 'en') {
      return redirect('301', '/en/medias/page/1');
    } else {
      return redirect('301', '/medias/page/1');
    }
  },
};
</script>
