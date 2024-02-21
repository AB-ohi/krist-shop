import "./ShopMenu.css";
const ShopMenu = () => {
  return (
    <div style={{margin:'auto', width:'900px'}}>
      <table className="menuTable">
        <tr className="table-row">
          <th>Men</th>
          <th>Women</th>
          <th>Footwear</th>
          <th>Kids</th>
        </tr>
        <tr className="table-row">
          <td>T-Shirt</td>
          <td>Kurtas & Suits</td>
          <td>Flats</td>
          <td>T-Shirt</td>
        </tr>
        <tr className="table-row">
          <td>Casusl Shirts</td>
          <td>Sarees</td>
          <td>Casual Shoes</td>
          <td>Shirts</td>
        </tr>
        <tr className="table-row">
          <td>Formal Shirts</td>
          <td>Ethnic Wear</td>
          <td>Heels</td>
          <td>Jeans</td>
        </tr>
        <tr className="table-row">
          <td>Jackets</td>
          <td>Lehenga Cholis</td>
          <td>Boots</td>
          <td>Trousers</td>
        </tr>
        <tr className="table-row">
          <td>Blazers & Coats</td>
          <td>Jackets</td>
          <td>Sports Shoes & Floaters</td>
          <td>Party wear</td>
        </tr>
        <tr className="table-row">
          <th>Indian & Festive Wear</th>
          <th>Western Wear</th>
          <th>Product Features</th>
          <td>Innerwear & Thermal</td>
        </tr>
        <tr className="table-row">
          <td>Kurta & Kurta Set</td>
          <td>Dresses</td>
          <td>360 Product Viewer</td>
          <td>Track pants</td>
        </tr>
        <tr className="table-row">
          <td>Sherwanis</td>
          <td>Jumpsuits</td>
          <td>Product with Video</td>
          <td>Value Pack</td>
        </tr>
      </table>
    </div>
  );
};

export default ShopMenu;
