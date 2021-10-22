#References 

In simple words, when you open ChangeDetectionStrategy.OnPush for a component, 
When you imagine the subtree of all components's views (change detection tree),
if the input reference is same of a on push component(for example, parent changes input object's property), 
then Angular won't check subtrees of that component, so that means skipping many components views' below change detection operation.
If input reference changes, then Angular will check this components views for change detection(rendering control),and there goes by to other child components if only input ref changes.

CD(tick) fire fill either input reference changes of an object or only value-type changes(not in object).

Angular change detection center/AppComponent.Tick() will skip checking these components's views 

That will help Angular to skip most of the substrees inputs's views's change detection operations.

How things works on onPush
https://hackernoon.com/angular-2-4-visualizing-change-detection-default-vs-onpush-3d7ed1f69f8e

OnPush animations
https://github.com/tadakoglu/change-detection-tree

# OnPushTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# AngularOnPush

