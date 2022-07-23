import capitalizeAllWords from "@/helpers/CapitalizeAllWords";

describe("CapitalizeAllWords", () => {

  it("should return the word capitalized", () => {
    const oneWord = "Brasil";

    expect(capitalizeAllWords("Brasil")).toBe(oneWord);
    expect(capitalizeAllWords(" Brasil")).toBe(oneWord);
    expect(capitalizeAllWords("brasil")).toBe(oneWord);
    expect(capitalizeAllWords(" brasil")).toBe(oneWord);
    expect(capitalizeAllWords("BRASIL")).toBe(oneWord);
    expect(capitalizeAllWords(" BRASIL")).toBe(oneWord);
    expect(capitalizeAllWords("BrasiL")).toBe(oneWord);
    expect(capitalizeAllWords(" BrasiL")).toBe(oneWord);
    expect(capitalizeAllWords("brasiL")).toBe(oneWord);
    expect(capitalizeAllWords(" brasiL")).toBe(oneWord);
    expect(capitalizeAllWords("bRASIL")).toBe(oneWord);
    expect(capitalizeAllWords(" bRASIL")).toBe(oneWord);
  });

  it("should return all words capitalized", () => {
    const twoWords = "Sao Paulo";

    expect(capitalizeAllWords("sao paulo")).toBe(twoWords);
    expect(capitalizeAllWords(" sao paulo")).toBe(twoWords);
    expect(capitalizeAllWords("Sao paulo")).toBe(twoWords);
    expect(capitalizeAllWords(" Sao paulo")).toBe(twoWords);
    expect(capitalizeAllWords("sao Paulo")).toBe(twoWords);
    expect(capitalizeAllWords(" sao Paulo")).toBe(twoWords);
    expect(capitalizeAllWords("SAO PAULO")).toBe(twoWords);
    expect(capitalizeAllWords(" SAO PAULO")).toBe(twoWords);
    expect(capitalizeAllWords("sAO pAULO")).toBe(twoWords);
    expect(capitalizeAllWords(" sAO pAULO")).toBe(twoWords);
  });

});
