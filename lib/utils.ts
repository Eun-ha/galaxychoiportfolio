export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("네트워크 응답 오류");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("데이터 요청 실패", error);
  }
}
