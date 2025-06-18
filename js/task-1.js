const categorias = document.querySelectorAll("#categories .item");

const countCategorias = categorias.length;
console.log(`Number of categorias: ${countCategorias}`);


categorias.forEach((item) => {
    const titleList = item.querySelector("h2").textContent;

    const countEl = item.querySelectorAll("li").length;
    
    
    console.log(`Category: ${titleList}`);

    console.log(`Elements: ${countEl}`);
    
}) 



