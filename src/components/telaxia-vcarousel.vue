<template>
  <pf-card class="card">
    <template v-slot:content>
      <pf-carousel
        :value="items"
        :numVisible="1"
        :numScroll="1"
        orientation="vertical"
        verticalViewPortHeight="430px"
      >
        <template #header>
          <h5>Vertical</h5>
        </template>
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div class="flex justify-content-center mb-3">
                <img
                  width="120"
                  src="https://source.unsplash.com/random"
                  :alt="slotProps.data.name"
                  class="product-image"
                />
              </div>
              <div class="mb-3">
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                <span
                  :class="
                    'product-badge status-' +
                    slotProps.data.inventoryStatus.toLowerCase()
                  "
                  >{{ slotProps.data.inventoryStatus }}</span
                >
                <div class="car-buttons mt-5">
                  <pf-button
                    icon="pi pi-search"
                    class="p-button p-button-rounded mr-2"
                  />
                  <pf-button
                    icon="pi pi-star-fill"
                    class="p-button-success p-button-rounded mr-2"
                  />
                  <pf-button
                    icon="pi pi-cog"
                    class="p-button-help p-button-rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </pf-carousel>
    </template>
  </pf-card>
</template>

<script>
export default {
  data() {
    return {
      products: null,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
      items: [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Black Watch",
          description: "Product Description",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1002",
          code: "zz21cz3c1",
          name: "Blue Band",
          description: "Product Description",
          image: "blue-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1003",
          code: "244wgerg2",
          name: "Blue T-Shirt",
          description: "Product Description",
          image: "blue-t-shirt.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1004",
          code: "h456wer53",
          name: "Bracelet",
          description: "Product Description",
          image: "bracelet.jpg",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1005",
          code: "av2231fwg",
          name: "Brown Purse",
          description: "Product Description",
          image: "brown-purse.jpg",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1006",
          code: "bib36pfvm",
          name: "Chakra Bracelet",
          description: "Product Description",
          image: "chakra-bracelet.jpg",
          price: 32,
          category: "Accessories",
          quantity: 5,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1007",
          code: "mbvjkgip5",
          name: "Galaxy Earrings",
          description: "Product Description",
          image: "galaxy-earrings.jpg",
          price: 34,
          category: "Accessories",
          quantity: 23,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1008",
          code: "vbb124btr",
          name: "Game Controller",
          description: "Product Description",
          image: "game-controller.jpg",
          price: 99,
          category: "Electronics",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 4,
        },
        {
          id: "1009",
          code: "cm230f032",
          name: "Gaming Set",
          description: "Product Description",
          image: "gaming-set.jpg",
          price: 299,
          category: "Electronics",
          quantity: 63,
          inventoryStatus: "INSTOCK",
          rating: 3,
        },
      ],
    };
  },
  productService: null,
};
</script>

<style scoped>
.card {
  width: 100%;
}

.product-item > .product-item-content {
  border: 1px solid var(--surface-border);
  border-radius: 3px;
  margin: 0.3rem;
  text-align: center;
  padding: 2rem 0;
}
.product-item > .product-image {
  height: 330px;
  width: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  object-fit: cover;
}
</style>
