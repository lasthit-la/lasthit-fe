/// <reference path='../_all.ts' />
module home {
	'use strict';

	export class Controller {
		public static $inject = ['$scope'];

		/**
		 * [constructor description]
		 * @param {any} private $scope [description]
		 */
		constructor(private $scope:any) {
			this.$scope.foo = "something";
		}
	}
}