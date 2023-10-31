let ROUTES= {};

let rootElement="";

export const setRootElement=(newRootElementValue)=>{
 rootElement= newRootElementValue;

}

export const setRoutes=(newRoutesValue)=>{

    ROUTES= newRoutesValue;

}

const renderView= (pathname, props={})=>{

const root= rootElement;
root.innerHTML= "";

if(ROUTES[pathname]){
    const template= ROUTES[pathname](props);
    root.appendChild(template);
}else{
    root.appendChild(ROUTES[`/error`](props));
}
};

export const navigateTo = (pathname, props={})=>{
const URLVisited= windowlocation.hostname+ pathname;
history.pushState({}, "", URLVisited);

renderView(pathname, props);


}


export const onURLChange = (location)=>{
    renderView(location);

}
