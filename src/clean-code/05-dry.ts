type Size = "" | "S" | "M" | "L";
class Product {
  private name: string;
  private price: number;
  private size: Size;
  constructor(name: string = "", price: number = 0, size: Size = "") {
    this.name = name;
    this.price = price;
    this.size = size;
  }
  toString() {
    //No dry
    // if (this.name.length === 0) throw new Error("Name is Empty");
    // if (this.price <= 0) throw new Error("Price is needed");
    // if (this.size.length=== 0) throw new Error("Size is needed");
    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
  isProductReady(): boolean {
    for (const key in this) {
      console.log(key, typeof this[key])

      switch (typeof this[key]) {
        case "string":
          if (this[key].length === 0) throw new Error("Name is Empty");
          break;
        case "number":
          if (this[key] <= 0) throw new Error("Price is needed");
          break;

        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }
}
(() => {
  const bluePants = new Product("Blue large Pants", 10, "M");
  console.log(bluePants.toString());
})();
