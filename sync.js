var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function wait(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function loadClothes() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 1: Clothes loaded into the washing machine.");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addDetergent() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 2: Detergent added.");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function selectWashMode(mode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 3: Wash mode selected - ".concat(mode, "."));
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fillWater() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 4: Water filled.");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function washCycle() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 5: Washing clothes...");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function drainWater() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 6: Draining dirty water.");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function rinseClothes() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 7: Rinsing with clean water.");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function spinDry() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Step 8: Spinning and drying.");
                    return [4 /*yield*/, wait(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function complete() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Step 9: Washing complete. Please remove your clothes.");
            return [2 /*return*/];
        });
    });
}
// 🔁 Full Process in Sync with Delay
function runWashingMachine(mode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("🚿 Washing Machine Starting...\n");
                    return [4 /*yield*/, loadClothes()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, addDetergent()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, selectWashMode(mode)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fillWater()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, washCycle()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, drainWater()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, rinseClothes()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, spinDry()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, complete()];
                case 9:
                    _a.sent();
                    console.log("\n✅ Process Finished.");
                    return [2 /*return*/];
            }
        });
    });
}
// ✅ Call Function
runWashingMachine("Normal");
