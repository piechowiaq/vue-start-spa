import {createRouter, createWebHashHistory} from "vue-router";
import PageViewer from "@/views/PageViewer";
import CreatePage from "@/views/CreatePage";
import Pages from "@/views/Pages";
import PagesList from "@/views/PagesList";
import PageEdit from "@/views/PageEdit";

const router =  createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:index?', component: PageViewer},
        {
            path: '/pages',
            component: Pages,
            children: [
                { path: '', component: PagesList},
                { path: 'create', component: CreatePage},
                { path: ':index/edit', component: PageEdit, props: true },
            ]
        },

    ]
});

export default router;