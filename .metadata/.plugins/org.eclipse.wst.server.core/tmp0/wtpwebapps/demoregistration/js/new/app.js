angular.module('app', ['ngImgCrop'])
 
 .controller('Ctrl', function($scope) {
    $scope.myImage='';
    $scope.myCroppedImage='';

    var handleFileSelect=function(evt) {
      
      var target  = evt.dataTransfer || evt.target;
      var file    = target && target.files && target.files[0];
      var options = {canvas:true};
      
      var displayImg = function(img) {
        $scope.$apply(function($scope){
          $scope.myImage=img.toDataURL();
        });
      }
      
      loadImage.parseMetaData(file, function (data) {
        if (data.exif) {
          options.orientation = data.exif.get('Orientation');
        }
        loadImage(file, displayImg, options );
      });
      
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
});

