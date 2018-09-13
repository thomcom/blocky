class Material {

    constructor(name) {
        this.name = name;
    
        this.mass = 1;
        this.maxHp = 1;
        this.gravity = false;
        this.isSolid = true;
        this.friction = 0;
   
        // Temporary render
        this.color = 'white';
    }
  
    setGravity(n) {
        this.gravity = f;
        return this; // Method chaining
    }
  
    setMaxHp(n) {
        this.maxHp = n;
        return this; // Method chaining
    }
  
    setIndestructable() {
        this.maxHp = 0;
    }
  
    setGravity(n) {
        this.gravity = n;
        return this; // Method chaining
    }
  
    setIsSolid(b) {
        this.isSolid = b;
    }
  
    setFriction(n) {
        this.friction = n;
        return this; // Method chaining
    }
  
    setColor(s) {
        this.color = s;
        return this; // Method chaining
    }
  
    get isIndestructable() {
        return this.maxHp <= 0;
    }
  
    toString() {
        return 'Material(' + this.name + ')'
    }
}
