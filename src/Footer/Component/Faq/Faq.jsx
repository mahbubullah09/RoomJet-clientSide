

const Faq = () => {
    return (
        <div>
          <div className="faq-cont flex flex-col-reverse gap-8 my-8 lg:flex lg:flex-row justify-between items-center">
            <div className="left-cont md:w-1/2">
              <div
                tabindex="0"
                className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
              >
                <div className="collapse-title text-xl font-medium">
                  How does FoodHub work?
                </div>
                <div className="collapse-content">
                  <p>
                    FoodHub is a user-friendly platform that allows you to explore
                    and order from a variety of restaurants and cuisines. Simply
                    download our app or visit our website, browse the menu, select
                    your dishes, and complete your order. We'll take care of the
                    rest.{" "}
                  </p>
                </div>
              </div>
              <div
                tabindex="0"
                className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
              >
                <div className="collapse-title text-xl font-medium">
                  What should I do if there's an issue with my order or delivery?
                </div>
                <div className="collapse-content">
                  <p>
                    If you encounter any problems with your order, such as missing
                    items or issues with the quality of your meal, please contact
                    our customer support team. We're here to assist you and will
                    work to resolve the issue promptly. You can find our contact
                    information on the website or app. Your satisfaction is our
                    priority!
                  </p>
                </div>
              </div>
              <div
                tabindex="0"
                className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
              >
                <div className="collapse-title text-xl font-medium">
                  What is the delivery time for my order?
                </div>
                <div className="collapse-content">
                  <p>
                    Delivery times may vary depending on your location and the
                    restaurant's availability. You can usually find estimated
                    delivery times displayed during the ordering process. Rest
                    assured, we strive to deliver your food as quickly as possible
                    while ensuring it's hot and fresh.
                  </p>
                </div>
              </div>
              <div
                tabindex="0"
                className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
              >
                <div className="collapse-title text-xl font-medium">
                  What payment methods are accepted?
                </div>
                <div className="collapse-content">
                  <p>
                    We accept various payment methods, including credit and debit
                    cards, digital wallets, and in some cases, cash upon delivery.
                    You can find the available payment options during the checkout
                    process for each order.
                  </p>
                </div>
              </div>
            </div>
    
            <div className="right-cont">
              <img src="https://i.ibb.co/1zbr0gJ/faq.png" alt="" />
            </div>
          </div>
        </div>
      );
    };

export default Faq;