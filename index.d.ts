export interface PostcodeArea {
  code: string;
  name: string;
}

export interface PostcodeDistrict {
  code: string;
  name: string;
  area: PostcodeArea;
}

export function getPostcodeDistrict(code: string): PostcodeDistrict;
export function getPostcodeArea(code: string): PostcodeDistrict;
