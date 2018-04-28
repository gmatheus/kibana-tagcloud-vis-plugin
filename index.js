export default function (kibana) {

  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/tagcloud_vis/tagcloud_vis'
      ]
    }
  });

}
