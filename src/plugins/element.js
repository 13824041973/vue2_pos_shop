import {
    Button,
    Row,
    Col,
    Tabs,
    TabPane,
    Table,
    TableColumn
} from 'element-ui';

export const setupElementUi = (Vue)=>{
    Vue.use(Button)
        .use(Row)
        .use(Col)
        .use(Tabs)
        .use(TabPane)
        .use(Table)
        .use(TableColumn)
}