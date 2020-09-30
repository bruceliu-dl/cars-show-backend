exports.id = 0;
exports.modules = {

/***/ 12:
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = __webpack_require__(7);
const mock_data_service_1 = __webpack_require__(13);
let CarsService = class CarsService {
    constructor(_mockDataService) {
        this._mockDataService = _mockDataService;
        this.objKeyName = ['id', 'brand', 'year', 'maker', 'makerYear', 'price'];
    }
    findAll() {
        return this._mockDataService.readFileFromJSON();
    }
    deleteCar(id) {
        this._mockDataService.readFileFromJSON().subscribe(d => {
            this.cars = d.data;
            if (id >= 0) {
                for (let i = 0; i < this.cars.length; i++) {
                    if (this.cars[i].id == id) {
                        this.cars.splice(i, 1);
                    }
                }
            }
        });
        this._mockDataService.writeFileToJSON(this.cars);
        debugger;
        return this.cars;
    }
};
CarsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof mock_data_service_1.MockDataService !== "undefined" && mock_data_service_1.MockDataService) === "function" ? _a : Object])
], CarsService);
exports.CarsService = CarsService;


/***/ })

};