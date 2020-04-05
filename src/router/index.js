import ListGroup from "../components/ListGroup";
import Card from "../components/Card";

const routes = [
  { path: "/", component: ListGroup },
  { path: "/group", component: Card }
];

export const router = new VueRouter({
  routes
});
