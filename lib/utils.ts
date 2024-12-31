export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("네트워크 응답 오류");
    }
    const data = await response.json();
    //console.log("utils 안에 fetch함수 입니다.");
    //console.log(data);
    return data;
  } catch (error) {
    console.log("데이터 요청 실패", error);
  }
}
