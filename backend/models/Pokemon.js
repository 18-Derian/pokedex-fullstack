class Pokemon {
    constructor({abilities, height, id, name, sprites, stats, types, weight, color, flavor_text_entries}){
        this._abilities = abilities;
        this._height = height/10;
        this._id = id;
        this._name = name;
        this._sprites = sprites;
        this._stats = stats;
        this._types = types;
        this._weight = weight/10;
        this._color = color;
        this._flavor_text_entries = flavor_text_entries;
    }
}

module.exports = Pokemon;