const cultures = [
  {
    id: 'ebb13916-2970-4e96-9c8f-65c318ef1b6b',
    producer_id: '0bb2f113-9c69-4137-8587-a04358eff430',
    culture_name: 'Soja',
  },
  {
    id: '8a49b0d5-7b89-4b15-953a-302f6370aa3f',
    producer_id: '699b9d48-76d6-40c6-80e3-4d63f8310112',
    culture_name: 'Milho',
  },
  {
    id: 'ae15e384-47a2-419f-92b3-f3b866688ef6',
    producer_id: '3f62421d-bcda-4706-b0c4-76b11e9535ed',
    culture_name: 'Algodão',
  },
  {
    id: 'bc801ed5-e084-4d5b-9309-0ec96a11983a',
    producer_id: '44d294e8-7688-4f8f-b38a-6f0e77fdf12e',
    culture_name: 'Café',
  },
  {
    id: 'e3b4444d-3026-4a37-b411-c630890d4144',
    producer_id: 'f7964715-cc9e-4d2e-b8f2-ed3d2e4658a0',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '28353e2a-190a-4b6b-94c5-90b47d0853ed',
    producer_id: 'e04265c4-612c-4329-89d1-e214a57bf15b',
    culture_name: 'Soja',
  },
  {
    id: '102521e6-b217-4be3-9318-841e8aa33c24',
    producer_id: '8a23f541-d3c7-4e39-b11d-d7584e569e9c',
    culture_name: 'Café',
  },
  {
    id: '7e1bf18d-245c-4dd7-9dbd-7f9b06557594',
    producer_id: '2177d1fd-c356-4769-8987-73b8376c9379',
    culture_name: 'Algodão',
  },
  {
    id: '2ad0733b-4256-47f0-ad79-671376c829a1',
    producer_id: 'd30cf595-3990-4a23-9270-c9db61171f83',
    culture_name: 'Café',
  },
  {
    id: 'e86012a8-2f8e-440b-a7bb-daba68b3c417',
    producer_id: '395430d8-ada1-4f3e-8e6b-d46c00a15e8f',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'c8c98e6f-1678-4a7e-b85a-5a1623edf79e',
    producer_id: '44256973-2708-4f22-9acc-82530587b7c4',
    culture_name: 'Soja',
  },
  {
    id: '2b473733-d0af-4b54-9ab5-6e7f2a2a6404',
    producer_id: '73c3a858-d3aa-4b11-9eba-805e0f97fd9b',
    culture_name: 'Milho',
  },
  {
    id: '33032047-7e1b-4ec7-8507-d26155872bfa',
    producer_id: 'a8786e85-3724-4c69-a26c-7426b20f3446',
    culture_name: 'Algodão',
  },
  {
    id: 'f58baeb2-01d0-49ef-8100-a81a85fb0abd',
    producer_id: '0f934d55-94b9-46ae-b602-d70f5b48d323',
    culture_name: 'Café',
  },
  {
    id: '7e4b2e61-6afc-4063-8d52-eecfa0b8c3d7',
    producer_id: 'a65511bb-7728-4f16-8403-bf79625ffdb1',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '7f981b42-384c-40e9-bbb1-25e5506383eb',
    producer_id: '6d3dc0d7-2c56-4325-a415-d43b86f07665',
    culture_name: 'Soja',
  },
  {
    id: '53a7c038-6179-4e3d-ad08-9199e88a6467',
    producer_id: '0570e059-b4f9-4937-a09b-c0b7b12ddc91',
    culture_name: 'Milho',
  },
  {
    id: 'd68a2c6f-5699-4a3e-acb1-3b1762f1bcbf',
    producer_id: 'e5c94dd9-8064-45be-a732-dfe050986b0d',
    culture_name: 'Algodão',
  },
  {
    id: '158f9443-25b9-4509-a292-4fd729e74df4',
    producer_id: 'a5cd0f44-2a38-493a-849f-7f6c1feeeadb',
    culture_name: 'Café',
  },
  {
    id: '5638d8db-ecc3-44f2-9c74-6ba23a83a7d8',
    producer_id: '4323e62a-4d42-4a91-b6d6-c90698cc474a',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '2aa3d027-3008-40fe-95b3-cf97b8da1ea5',
    producer_id: '13d791d5-cb46-4b71-9586-1dcb5e031023',
    culture_name: 'Soja',
  },
  {
    id: 'f909f7ac-571f-469b-a4f0-2a8cecbe2b06',
    producer_id: 'bd987e8a-be8e-428c-8070-818eddbd5a8c',
    culture_name: 'Milho',
  },
  {
    id: 'b46967aa-78b0-4781-bfe2-8281e840a25a',
    producer_id: 'e3281076-c987-45e3-9722-77d577d3b3c0',
    culture_name: 'Algodão',
  },
  {
    id: '878f704a-adec-48ca-a012-8578ac76a83c',
    producer_id: '8bcfde39-02f5-4f0d-b06f-a53e2a57cc5c',
    culture_name: 'Café',
  },
  {
    id: '6b2e85e2-b2de-44a8-bbf8-e75464bf5468',
    producer_id: 'a2793a9f-9700-47bd-871c-2a9408361350',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'ed3d67e0-d166-4a17-9eb8-0f46042b8571',
    producer_id: '604a84c7-aea7-4aa1-bd0d-7766297285a8',
    culture_name: 'Soja',
  },
  {
    id: '297413e7-e88f-4f45-859e-ff2a62fdad9d',
    producer_id: '5f2d96c7-e7fb-4f03-aec1-7dd193357254',
    culture_name: 'Milho',
  },
  {
    id: '8ba7f99f-59a4-4465-9dd3-d244a86d4b38',
    producer_id: '199380d0-b453-4f7c-af18-07894c4e2dd6',
    culture_name: 'Algodão',
  },
  {
    id: 'ffd2a490-ce0d-4343-8ad5-117e3598b4a2',
    producer_id: '6dfae0ff-17a2-499e-89bf-2b7d074bbbb1',
    culture_name: 'Café',
  },
  {
    id: 'a74697be-5ecb-46e6-8173-8ac163ee9abb',
    producer_id: '892df34c-30d1-4b55-a966-62a109537c8c',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '1f8a5205-70e9-4d27-86a1-494320e92228',
    producer_id: '0bb2f113-9c69-4137-8587-a04358eff430',
    culture_name: 'Soja',
  },
  {
    id: '5c1ccb0b-35e4-4ca0-87e2-1e6031c84e99',
    producer_id: '699b9d48-76d6-40c6-80e3-4d63f8310112',
    culture_name: 'Milho',
  },
  {
    id: 'aab0ef0f-3660-498d-baac-6b9aee175b46',
    producer_id: '3f62421d-bcda-4706-b0c4-76b11e9535ed',
    culture_name: 'Algodão',
  },
  {
    id: 'bf948d22-c951-4b86-8db8-57981f00f619',
    producer_id: '44d294e8-7688-4f8f-b38a-6f0e77fdf12e',
    culture_name: 'Café',
  },
  {
    id: '399f4791-88ac-4b84-8bc5-a4d9694cb434',
    producer_id: 'f7964715-cc9e-4d2e-b8f2-ed3d2e4658a0',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '85e665c2-b3d3-4057-b36a-6c1876cc4776',
    producer_id: 'e04265c4-612c-4329-89d1-e214a57bf15b',
    culture_name: 'Soja',
  },
  {
    id: '697ddca3-465d-40ad-a760-b47ba314b27f',
    producer_id: '8a23f541-d3c7-4e39-b11d-d7584e569e9c',
    culture_name: 'Milho',
  },
  {
    id: '7f98df3d-c71b-461e-a60b-6143f01a34d1',
    producer_id: '2177d1fd-c356-4769-8987-73b8376c9379',
    culture_name: 'Algodão',
  },
  {
    id: 'b610eadc-2ce5-4b65-a688-5ad0490bf16f',
    producer_id: 'd30cf595-3990-4a23-9270-c9db61171f83',
    culture_name: 'Café',
  },
  {
    id: '47855725-6606-4c8f-81b0-2b541943ca18',
    producer_id: '395430d8-ada1-4f3e-8e6b-d46c00a15e8f',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '5fcbb63b-ab2d-41e5-b7b8-ed6706832fd9',
    producer_id: '44256973-2708-4f22-9acc-82530587b7c4',
    culture_name: 'Soja',
  },
  {
    id: 'a98ba73f-a727-401c-8248-768b6d16db59',
    producer_id: '73c3a858-d3aa-4b11-9eba-805e0f97fd9b',
    culture_name: 'Milho',
  },
  {
    id: '199582dd-6559-429e-bca0-347210bd1e32',
    producer_id: 'a8786e85-3724-4c69-a26c-7426b20f3446',
    culture_name: 'Algodão',
  },
  {
    id: '24657de0-8c7e-4972-82d0-48ee7b042c18',
    producer_id: '0f934d55-94b9-46ae-b602-d70f5b48d323',
    culture_name: 'Café',
  },
  {
    id: '39d8cc6a-ec0d-4758-8ef8-826836d6970e',
    producer_id: 'a65511bb-7728-4f16-8403-bf79625ffdb1',
    culture_name: 'Café',
  },
  {
    id: 'eead6605-99fe-4dd5-802f-0d839a0bae85',
    producer_id: '6d3dc0d7-2c56-4325-a415-d43b86f07665',
    culture_name: 'Soja',
  },
  {
    id: '8645544b-6842-46e4-9071-d80c83906db1',
    producer_id: '0570e059-b4f9-4937-a09b-c0b7b12ddc91',
    culture_name: 'Algodão',
  },
  {
    id: '17b1c5a3-b916-4c43-92ac-f01fff1f56f7',
    producer_id: 'e5c94dd9-8064-45be-a732-dfe050986b0d',
    culture_name: 'Algodão',
  },
  {
    id: '5e3cec70-4197-4992-9d3a-8bc741493fb5',
    producer_id: 'a5cd0f44-2a38-493a-849f-7f6c1feeeadb',
    culture_name: 'Café',
  },
  {
    id: 'a85b1968-2dbd-4266-beb4-7309e168eafe',
    producer_id: '4323e62a-4d42-4a91-b6d6-c90698cc474a',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'a875ba8b-3344-4fb9-b092-d0bff40b6807',
    producer_id: '13d791d5-cb46-4b71-9586-1dcb5e031023',
    culture_name: 'Soja',
  },
  {
    id: '4d4d507f-c943-407c-b0c5-956eebdec49c',
    producer_id: 'bd987e8a-be8e-428c-8070-818eddbd5a8c',
    culture_name: 'Milho',
  },
  {
    id: 'ffa5f336-7aa9-496f-9bcb-4b55007afe17',
    producer_id: 'e3281076-c987-45e3-9722-77d577d3b3c0',
    culture_name: 'Algodão',
  },
  {
    id: 'f2b8b872-dded-4f69-ba39-cbe047ee80dd',
    producer_id: '8bcfde39-02f5-4f0d-b06f-a53e2a57cc5c',
    culture_name: 'Café',
  },
  {
    id: 'd738ea08-a842-42fd-be9f-99f7018cf9c9',
    producer_id: 'a2793a9f-9700-47bd-871c-2a9408361350',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'a8402838-acad-4bae-827f-dc78116e6562',
    producer_id: '604a84c7-aea7-4aa1-bd0d-7766297285a8',
    culture_name: 'Soja',
  },
  {
    id: 'fb6bb17a-7dd7-41bd-98b6-484668778d68',
    producer_id: '5f2d96c7-e7fb-4f03-aec1-7dd193357254',
    culture_name: 'Algodão',
  },
  {
    id: '7105bbde-8272-4348-a9ea-86218bd8e8b4',
    producer_id: '199380d0-b453-4f7c-af18-07894c4e2dd6',
    culture_name: 'Algodão',
  },
  {
    id: '904a6b84-be23-4805-b7bc-947c0a541752',
    producer_id: '6dfae0ff-17a2-499e-89bf-2b7d074bbbb1',
    culture_name: 'Café',
  },
  {
    id: '7d05a3e2-d887-45b0-9cbf-9e29a6cc9bff',
    producer_id: '892df34c-30d1-4b55-a966-62a109537c8c',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'f3742b2d-0f60-42f9-932f-fa6c36da29de',
    producer_id: '0bb2f113-9c69-4137-8587-a04358eff430',
    culture_name: 'Soja',
  },
  {
    id: '2df26427-916e-424a-b8e6-988b80dd1010',
    producer_id: '699b9d48-76d6-40c6-80e3-4d63f8310112',
    culture_name: 'Milho',
  },
  {
    id: 'a932d6a3-2180-482a-806f-03670fa53790',
    producer_id: '3f62421d-bcda-4706-b0c4-76b11e9535ed',
    culture_name: 'Algodão',
  },
  {
    id: '460898f1-f3c6-4354-8230-756560570352',
    producer_id: '44d294e8-7688-4f8f-b38a-6f0e77fdf12e',
    culture_name: 'Café',
  },
  {
    id: 'cfb0ddca-2e82-4648-89e7-d1a0b594935b',
    producer_id: 'f7964715-cc9e-4d2e-b8f2-ed3d2e4658a0',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '71f48666-59c7-4048-b061-b28a09008bf0',
    producer_id: 'e04265c4-612c-4329-89d1-e214a57bf15b',
    culture_name: 'Soja',
  },
  {
    id: '151a8237-177a-4702-92d7-ec7d7559f4db',
    producer_id: '8a23f541-d3c7-4e39-b11d-d7584e569e9c',
    culture_name: 'Milho',
  },
  {
    id: '3da0e28d-82e2-49ba-96f1-c6956c03433f',
    producer_id: '2177d1fd-c356-4769-8987-73b8376c9379',
    culture_name: 'Algodão',
  },
  {
    id: 'ff11f0f0-f77d-490c-8680-98e009a0b520',
    producer_id: 'd30cf595-3990-4a23-9270-c9db61171f83',
    culture_name: 'Café',
  },
  {
    id: '98e52797-8263-4766-8b77-3cde38bca882',
    producer_id: '395430d8-ada1-4f3e-8e6b-d46c00a15e8f',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'eae25b13-5376-4d74-8720-b8e4751e77a4',
    producer_id: '44256973-2708-4f22-9acc-82530587b7c4',
    culture_name: 'Soja',
  },
  {
    id: 'b9ff8b55-a5cf-4375-92cf-aa896daadcc9',
    producer_id: '73c3a858-d3aa-4b11-9eba-805e0f97fd9b',
    culture_name: 'Algodão',
  },
  {
    id: 'b9b3574b-ecaa-457e-8dbe-bf6dd8936ea0',
    producer_id: 'a8786e85-3724-4c69-a26c-7426b20f3446',
    culture_name: 'Algodão',
  },
  {
    id: 'ea65d362-816b-478b-b053-e366c1596621',
    producer_id: '0f934d55-94b9-46ae-b602-d70f5b48d323',
    culture_name: 'Café',
  },
  {
    id: 'dd3bb73b-1b9d-4b6f-81ca-d018e2898271',
    producer_id: 'a65511bb-7728-4f16-8403-bf79625ffdb1',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'd2ca17ad-599b-4bf5-9d91-41398a9e4029',
    producer_id: '6d3dc0d7-2c56-4325-a415-d43b86f07665',
    culture_name: 'Soja',
  },
  {
    id: 'c3f9f852-0965-485f-8437-714211dfd0a3',
    producer_id: '0570e059-b4f9-4937-a09b-c0b7b12ddc91',
    culture_name: 'Milho',
  },
  {
    id: 'd3148322-2bb7-4099-9351-b73516c7b527',
    producer_id: 'e5c94dd9-8064-45be-a732-dfe050986b0d',
    culture_name: 'Algodão',
  },
  {
    id: 'af0a62df-aeed-4ecf-91a3-89de5d600c6e',
    producer_id: 'a5cd0f44-2a38-493a-849f-7f6c1feeeadb',
    culture_name: 'Café',
  },
  {
    id: '2cf10e30-c3b6-4446-a65b-dde1eab21f42',
    producer_id: '4323e62a-4d42-4a91-b6d6-c90698cc474a',
    culture_name: 'Cana de Açucar',
  },
  {
    id: '1f9074fe-5be3-419e-bfbf-dc3ac6cd1f86',
    producer_id: '13d791d5-cb46-4b71-9586-1dcb5e031023',
    culture_name: 'Soja',
  },
  {
    id: '9a67a2d1-de6d-462e-a8d3-f6cc92e507da',
    producer_id: 'bd987e8a-be8e-428c-8070-818eddbd5a8c',
    culture_name: 'Milho',
  },
  {
    id: '3faddb12-c28b-4431-8b5f-1ffe9b63b3a4',
    producer_id: 'e3281076-c987-45e3-9722-77d577d3b3c0',
    culture_name: 'Algodão',
  },
  {
    id: '81606ce5-008a-44d8-8bbc-d8ab3c7d0afa',
    producer_id: '8bcfde39-02f5-4f0d-b06f-a53e2a57cc5c',
    culture_name: 'Café',
  },
  {
    id: '24e83de8-4fae-4f7b-8baa-f88d3389e3d0',
    producer_id: 'a2793a9f-9700-47bd-871c-2a9408361350',
    culture_name: 'Algodão',
  },
  {
    id: 'd78ad44f-9368-410b-a500-43145332b69b',
    producer_id: '604a84c7-aea7-4aa1-bd0d-7766297285a8',
    culture_name: 'Soja',
  },
  {
    id: 'a4b231ef-5c8a-4847-ba2c-46cc3855d693',
    producer_id: '5f2d96c7-e7fb-4f03-aec1-7dd193357254',
    culture_name: 'Milho',
  },
  {
    id: 'ec4f64d1-60e6-4a80-b14f-df73a408a846',
    producer_id: '199380d0-b453-4f7c-af18-07894c4e2dd6',
    culture_name: 'Algodão',
  },
  {
    id: '5d7904f6-4e61-4574-a4fb-a1958843e176',
    producer_id: '6dfae0ff-17a2-499e-89bf-2b7d074bbbb1',
    culture_name: 'Café',
  },
  {
    id: '40edd522-41fc-49e9-bdf0-8dc7a2a51214',
    producer_id: '892df34c-30d1-4b55-a966-62a109537c8c',
    culture_name: 'Cana de Açucar',
  },
  {
    id: 'a853f50e-2bfa-4dfc-b4e0-6b6cc6dae6b7',
    producer_id: '0bb2f113-9c69-4137-8587-a04358eff430',
    culture_name: 'Café',
  },
  {
    id: '4379e051-f1b3-4d46-8049-1a25ff2054ad',
    producer_id: '699b9d48-76d6-40c6-80e3-4d63f8310112',
    culture_name: 'Milho',
  },
  {
    id: 'ad4bd98d-3b2b-4413-a73f-0fc514572d8e',
    producer_id: '3f62421d-bcda-4706-b0c4-76b11e9535ed',
    culture_name: 'Algodão',
  },
  {
    id: 'f831bfc1-1e9a-4916-8fa9-26c63a0508f6',
    producer_id: '44d294e8-7688-4f8f-b38a-6f0e77fdf12e',
    culture_name: 'Café',
  },
  {
    id: '33a599c3-41a6-42e4-8433-d0c82bfc384c',
    producer_id: 'f7964715-cc9e-4d2e-b8f2-ed3d2e4658a0',
    culture_name: 'Café',
  },
  {
    id: '24d1eb59-8cfb-4e7d-99b7-f21c7134fd83',
    producer_id: 'e04265c4-612c-4329-89d1-e214a57bf15b',
    culture_name: 'Soja',
  },
  {
    id: 'cbc99bfd-ef26-4312-8c01-2e88300ede7a',
    producer_id: '8a23f541-d3c7-4e39-b11d-d7584e569e9c',
    culture_name: 'Milho',
  },
  {
    id: 'b5cb3364-59c2-4b44-90a4-4f2f570833b9',
    producer_id: '2177d1fd-c356-4769-8987-73b8376c9379',
    culture_name: 'Café',
  },
  {
    id: 'e5e9466b-adca-4d2b-8541-6379bf01b0c6',
    producer_id: 'd30cf595-3990-4a23-9270-c9db61171f83',
    culture_name: 'Café',
  },
  {
    id: '88e79971-9fb7-4d40-b8e6-f2c281a1ff6d',
    producer_id: '395430d8-ada1-4f3e-8e6b-d46c00a15e8f',
    culture_name: 'Cana de Açucar',
  }
]

export { cultures }