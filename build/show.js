"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Show_title, _Show_seasons, _Show_delivered, _Show_gender, _Show_author;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
class Show {
    constructor(title, seasons, gender, author) {
        _Show_title.set(this, void 0);
        _Show_seasons.set(this, 3);
        _Show_delivered.set(this, false);
        _Show_gender.set(this, void 0);
        _Show_author.set(this, void 0);
        __classPrivateFieldSet(this, _Show_title, title, "f");
        __classPrivateFieldSet(this, _Show_seasons, seasons, "f");
        __classPrivateFieldSet(this, _Show_gender, gender, "f");
        __classPrivateFieldSet(this, _Show_author, author, "f");
    }
    get title() {
        return __classPrivateFieldGet(this, _Show_title, "f");
    }
    set title(newTitle) {
        __classPrivateFieldSet(this, _Show_title, newTitle, "f");
    }
    get seasons() {
        return __classPrivateFieldGet(this, _Show_seasons, "f");
    }
    set seasons(newSeasons) {
        __classPrivateFieldSet(this, _Show_seasons, newSeasons, "f");
    }
    get gender() {
        return __classPrivateFieldGet(this, _Show_gender, "f");
    }
    set gender(newGender) {
        __classPrivateFieldSet(this, _Show_gender, newGender, "f");
    }
    get author() {
        return __classPrivateFieldGet(this, _Show_author, "f");
    }
    set author(newAuthor) {
        __classPrivateFieldSet(this, _Show_author, newAuthor, "f");
    }
    toString() {
        return `Name: ${__classPrivateFieldGet(this, _Show_title, "f")}\nSeasons: ${__classPrivateFieldGet(this, _Show_seasons, "f")}\nGender: ${__classPrivateFieldGet(this, _Show_gender, "f")}\nAuthor: ${__classPrivateFieldGet(this, _Show_author, "f")}`;
    }
    deliver() {
        __classPrivateFieldSet(this, _Show_delivered, true, "f");
    }
    return() {
        __classPrivateFieldSet(this, _Show_delivered, false, "f");
    }
    isDelivered() {
        return __classPrivateFieldGet(this, _Show_delivered, "f");
    }
    compareTo(objectToCompare) {
        let longestShow = this;
        if (__classPrivateFieldGet(this, _Show_seasons, "f") < __classPrivateFieldGet(objectToCompare, _Show_seasons, "f"))
            longestShow = objectToCompare;
        return longestShow;
    }
}
exports.Show = Show;
_Show_title = new WeakMap(), _Show_seasons = new WeakMap(), _Show_delivered = new WeakMap(), _Show_gender = new WeakMap(), _Show_author = new WeakMap();
const miShow = new Show("Friends", 7, "comedy", "Jano");
console.log(miShow.toString());
