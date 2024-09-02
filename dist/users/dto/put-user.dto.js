"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class PutUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.PutUserDto = PutUserDto;
//# sourceMappingURL=put-user.dto.js.map