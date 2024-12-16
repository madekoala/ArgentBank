import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Item from "../components/item";

/**
 * The Home Page
 * with header, introduction
 * and items of Argent Bank
 * @component
 */
function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <Introduction />
      <div className="items">
        <Item
          image={iconChat}
          titre="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Item
          image={iconMoney}
          titre="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Item
          image={iconSecurity}
          titre="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;
