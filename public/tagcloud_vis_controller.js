import { uiModules } from 'ui/modules'
import { FilterManagerProvider } from 'ui/filter_manager';

const module = uiModules.get('tagcloud_vis')
module.controller('TagcloudVisController', ($scope, Private) => {
  const filterManager = Private(FilterManagerProvider);

  $scope.filter = function(tag) {
    filterManager.add(
      $scope.vis.aggs.bySchemaName['tags'][0].params.field,
      tag.label,
      null,
      $scope.vis.indexPattern.title
    );
  };

  $scope.$watch('esResponse', function(resp) {
    if (!resp || !resp.tables.length) {
      $scope.tags = null;
      return;
    }

    const data = resp.tables[0];
    $scope.tags = data.rows.map(row => {
      const [tag, count] = row;
      return {
        label: tag,
        size: count
      };
    });
  });
})
