// import products from "./products.js";
// const ul = document.querySelector("ul");

const productInfo = "https://my-json-server.typicode.com/hoon730/joonggonara_fake/db"

fetch(productInfo).then((response) => response.json()).then((data) => {

  let idCounter = Date.now();
  const products = {
    data: data.data.map((item) => ({
      ...item,
      id: idCounter++,
    }))
  };

  //Removing Items
  const removeItems = () => {
    const items = document.querySelectorAll("li");
    items.forEach((item) => {
      item.remove();
    });
  };

  // Making items
  const createItem = (product) => {
    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    const img = document.createElement("img");
    const attr = document.createAttribute("src");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    li.id = product.id;
    console.log();

    const price = new Intl.NumberFormat("ko-kr", {
      style: "currency",
      currency: "KRW",
    }).format(product.price);

    h3.className = "name";
    h3.innerText = product.name;

    span.className = "price"
    span.innerText = price;


    attr.value = product.img;
    img.setAttributeNode(attr);

    div.append(h3, span);
    li.append(img, div);
    ul.appendChild(li);

    li.addEventListener("click", () => {
      const url = `product-detail.html?category=${product.category}&name=${encodeURIComponent(product.name)}`;
      window.location.href = url;
    });
  };

  
  // importing Items
  const importData = () => {
    products.data.map((product) => {
      createItem(product);
    })
  };

  importData();

  // Button Events
  const newListing = document.querySelector(".newlisting");
  
  const sortNew = (e) => {
    e.preventDefault();

    const myProducts = products.data.sort((a, b) => {
      return b.id - a.id;
    });

    removeItems();

    myProducts.forEach((product) => {
      createItem(product);
    })
  };
  
  newListing.addEventListener("click", sortNew);

  // Accending
  const accendButton = document.querySelector(".accending");

  const sortAccending = (e) => {
    e.preventDefault();

    const myProducts = products.data.sort((a,b) => {
      return a.price - b.price;
    });

    removeItems();

    myProducts.forEach((product) => {
      createItem(product);
    })
  };

  accendButton.addEventListener("click", sortAccending)

  // Deccending
  const DeccendButton = document.querySelector(".deccending");
  console.log("click")

  const sortdeccending = (e) => {
    e.preventDefault();

    const myProducts = products.data.sort((a,b) => {
      return b.price - a.price;
    });

    removeItems();

    myProducts.forEach((product) => {
      createItem(product);
    });
  }

  DeccendButton.addEventListener("click", sortdeccending);

  //Search
  const searchBar = document.querySelector(".searchBar");

  searchBar.addEventListener("input", () => {
    const keyword = searchBar.value.toLowerCase();
    if(keyword === "") {
      removeItems();
      importData();
    } else {
      const filtered = products.data.filter((product) => {
        return product.name.toLowerCase().includes(keyword);
      });
  
      removeItems();

      filtered.forEach((product) => {
        createItem(product);
      });
    }
  });

  // Select Event
  const select = document.querySelector("select");

  const selectCategory = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const value = e.target.options[selectedIndex].value;

    const filtered = products.data.filter((product) => {
      return product.category === value;
    });

    removeItems();

    filtered.forEach((product) => {
      createItem(product);
    });
  };

  select.addEventListener("change", selectCategory);
})
.catch((error) => {
  console.log(error);
});

// Channel Talk


  (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

  ChannelIO('boot', {
    "pluginKey": "74a5dd3e-fe19-4e42-824f-b19454d1c69e"
  });



// map => 원본의 배열 데이터를 그대로 둔 상태로 어떤 추가적인 기능을 부여해서 새로운 배열을 다시 생성하할 때 사용하는 함수

// sort => 배열 안에 입력된 값을 내림 혹은 오름차순으로 정렬을 시켜주는 함수

// filter => 배열 안에 입력된 값을 하나씩 찾아와서 조건을 기준으로 참(*true)인 값만 추출해서 새로운 배열로 생성 함수!!