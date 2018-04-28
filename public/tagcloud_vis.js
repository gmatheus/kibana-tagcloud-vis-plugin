import 'plugins/tagcloud_vis/tagcloud_vis.less'
import 'plugins/tagcloud_vis/tagcloud_vis_controller'
import { VisFactoryProvider } from 'ui/vis/vis_factory'
import { CATEGORY } from 'ui/vis/vis_category'
import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';
import tagcloudVisTemplate from 'plugins/tagcloud_vis/tagcloud_vis.html'
import { VisTypesRegistryProvider } from 'ui/registry/vis_types'

VisTypesRegistryProvider.register(TagcloudVisProvider)

function TagcloudVisProvider(Private) {
  const Schemas = Private(VisSchemasProvider)
  const VisFactory = Private(VisFactoryProvider)

  return VisFactory.createAngularVisualization({
    name: 'tagcloud_vis',
    title: 'Tag Cloud (Test)',
    isAccessible: true,
    icon: 'fa-cloud',
    description: 'Tagcloud visualization',
    category: CATEGORY.OTHER,
    visConfig: {
      template: tagcloudVisTemplate,
    },
    editorConfig: {
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'tagsize',
          title: 'Tagsize',
          min: 1,
          max: 1,
          aggFilter: [ 'count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev' ]
        }, {
          group: 'buckets',
          name: 'tags',
          title: 'Tags',
          min: 1,
          max: 1,
          aggFilter: ['terms']
        }
      ])
    }
  })
}

export default TagcloudVisProvider
