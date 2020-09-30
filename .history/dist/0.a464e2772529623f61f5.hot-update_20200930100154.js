exports.id = 0;
exports.modules = {

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDataService = void 0;
const common_1 = __webpack_require__(7);
const fs = __webpack_require__(14);
const path = __webpack_require__(15);
let MockDataService = class MockDataService {
    constructor() {
        this.filePath = path.resolve(__dirname, '../mock-data.json');
    }
    readFileFromJSON() {
        debugger;
        return new Promise(function (resolve, reject) {
            fs.readFile(this.filePath.toString(), 'utf-8', (err, data) => {
                debugger;
                if (err) {
                    reject(err);
                }
                else {
                    this.jsonData = JSON.parse(data);
                    resolve(this.jsonData);
                }
            });
        });
    }
    writeFileToJSON(data) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(this.filePath.toString(), JSON.stringify(data), err => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(0);
                }
            });
        });
    }
};
MockDataService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], MockDataService);
exports.MockDataService = MockDataService;


/***/ })

};