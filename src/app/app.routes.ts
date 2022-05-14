import {RouterModule,Routes} from '@angular/router';
import {
	// HeaderComponent,
	// FooterComponent,
	// RegisterComponent,
	// LoginComponent,
	// LateralmenuComponent,
	// AccountComponent, 
	// DashboardComponent,
	// SuccessregisterComponent,
	TestappComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	// {path:'',component:RegisterComponent},
	// {path:'header',component:HeaderComponent},
	// {path:'footer',component:FooterComponent},
	// {path:'register',component:RegisterComponent},
	// {path:'login',component:LoginComponent},
	// {path:'lateralmenu',component:LateralmenuComponent},
	// {path:'account',component:AccountComponent, canActivate:[AuthGuard]},
	// {path:'dashboard',component:DashboardComponent},
	// {path:'successregister',component:SuccessregisterComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

