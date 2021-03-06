import { ApiProperty } from "@nestjs/swagger";

export class InfoPostDTO {
    @ApiProperty()
    name: string;
}
export class InfoPutDTO extends InfoPostDTO {
    @ApiProperty()
    id: number;
}

export class EntityPostDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    info: InfoPostDTO;
}
export class EntityPutDTO extends EntityPostDTO {
    @ApiProperty()
    info: InfoPutDTO;
}
