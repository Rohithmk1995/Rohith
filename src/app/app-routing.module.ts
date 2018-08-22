import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes : Routes = [
    { path : 'about' , component : AboutComponent},
    { path : 'experience', component : ExperienceComponent },
    { path : 'education', component : EducationComponent },
    { path : 'awards', component : AwardsComponent },
    { path : "**", component : AboutComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [ IndexComponent, AboutComponent, ExperienceComponent, EducationComponent,
                                    SkillsComponent, InterestsComponent, AwardsComponent, PagenotfoundComponent];
