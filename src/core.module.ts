import {NgModule} from "@angular/core";
import {ShoppingListService} from "./app/shopping-list/shopping-list.service";
import {RecipeService} from "./app/recipes/recipe.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./app/auth/auth-interceptor.service";

@NgModule({
  providers: [ShoppingListService, RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }]
})

export class CoreModule {
}
