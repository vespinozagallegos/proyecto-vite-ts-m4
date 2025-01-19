//* Se declarar la INTERFAZ y se TIPA lo que recibe <Item>
export interface IItemListProps<Item> {
    // prop items = Array de Item
    items: Item[];
    // se declara una función que renderiza los elementos a recibir
    renderCallback: (item: Item) => React.ReactNode;
}