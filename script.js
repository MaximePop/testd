
        function displaySearchResults(results) {
          const searchResultsContainer = document.getElementById('searchResults');
          let searchResultsHTML = '';

          if (results.length > 0) {
            searchResultsHTML += '<ul>';
            results.forEach(result => {
              searchResultsHTML += `
                <li>
                    <span class="category">${result.category}</span>:
                    <a href="${result.link}" class="article-title">${result.title}</a>
                </li>
            `;
            });
            searchResultsHTML += '</ul>';
          } else {
            searchResultsHTML = 'Aucun résultat trouvé.';
          }

          searchResultsContainer.innerHTML = searchResultsHTML;

        }


        function fetchZoteroCollection(collectionUrl, targetElementId) {
  fetch(collectionUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        var title = item.data.title;
        var url = item.data.url;

        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = url;
        link.textContent = title;
        link.target = '_blank'; // Open the link in a new tab
        listItem.appendChild(link);

        document.getElementById(targetElementId).appendChild(listItem);
      });
    })
    .catch(error => console.log(error));
}


        function createSubCollection(parentCollectionId, parentCollectionKey, subCollectionTitle) {
          var apiKey = 'yQraJQogHA89BHu3VJBKXLha';  // Replace with your Zotero API key

          var apiUrl = 'https://api.zotero.org/users/9668586/collections?key=' + apiKey;
          var userID = '9668586';  // Replace with your Zotero user ID

          var data = {
            'name': subCollectionTitle,
            'parentCollection': parentCollectionId
          };

          fetch(apiUrl.replace('9668586', userID), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(subCollection => {
              console.log('Subcollection created:', subCollection);
            })
            .catch(error => console.log(error));
        }

        var apiKey = 'yQraJQogHA89BHu3VJBKXLha';  // Replace with your Zotero API key

        var collectionUrls = [
          'https://api.zotero.org/users/9668586/collections/8PHW6BAG/items/top?v=3&key=' + apiKey,  // Analyse et traitement sémantique
          'https://api.zotero.org/users/9668586/collections/SMTFXD66/items/top?v=3&key=' + apiKey,  // Analyse du web (subcollection)
          'https://api.zotero.org/users/9668586/collections/NUFHR9J3/items/top?v=3&key=' + apiKey,  // Analyse et traitement sémantique (subcollection)
          'https://api.zotero.org/users/9668586/collections/BNWSQQWJ/items/top?v=3&key=' + apiKey,  // Annotation collaborative
          'https://api.zotero.org/users/9668586/collections/7FUX4CMB/items/top?v=3&key=' + apiKey,  // Bibliothèque numérique
          'https://api.zotero.org/users/9668586/collections/N3NVZA75/items/top?v=3&key=' + apiKey,  // Cartographie et visualisation
          'https://api.zotero.org/users/9668586/collections/8E8H4TF7/items/top?v=3&key=' + apiKey,  // Diffusion
          'https://api.zotero.org/users/9668586/collections/22Z66JU7/items/top?v=3&key=' + apiKey,  // Ecosophie
          'https://api.zotero.org/users/9668586/collections/AS663FZC/items/top?v=3&key=' + apiKey,  // Ecriture
          'https://api.zotero.org/users/9668586/collections/2Z8DVDUV/items/top?v=3&key=' + apiKey,  // Edition numérique
          'https://api.zotero.org/users/9668586/collections/BRXJDSG4/items/top?v=3&key=' + apiKey,  // Transcription
          'https://api.zotero.org/users/9668586/collections/ZX4H5G27/items/top?v=3&key=' + apiKey,  // Enseignement, formation, recherche
          'https://api.zotero.org/users/9668586/collections/284A3JK5/items/top?v=3&key=' + apiKey,  // Histoire philosophie controverse
          'https://api.zotero.org/users/9668586/collections/XVHABQ5P/items/top?v=3&key=' + apiKey,  // Ingénierie
          'https://api.zotero.org/users/9668586/collections/BHDKDGB5/items/top?v=3&key=' + apiKey,  // Manifestations
          'https://api.zotero.org/users/9668586/collections/5BCUGMKP/items/top?v=3&key=' + apiKey,  // Sciences ouvertes
          'https://api.zotero.org/users/9668586/collections/UU2DPQJS/items/top?v=3&key=' + apiKey,  // Base de données (subcollection)
          'https://api.zotero.org/users/9668586/collections/N8GGXUG6/items/top?v=3&key=' + apiKey,  // Stockage archivage (subcollection)
          'https://api.zotero.org/users/9668586/collections/8WRX2F9V/items/top?v=3&key=' + apiKey,   // Veille
          'https://api.zotero.org/users/9668586/collections/TMQWC3J5/items/top?v=3&key=' + apiKey ,  // Ressources
          'https://api.zotero.org/users/9668586/collections/GJ6CVBBP/items/top?v=3&key=' + apiKey ,  // Fondamentaux
          'https://api.zotero.org/users/9668586/collections/EP6WPBE5/items/top?v=3&key=' + apiKey ,  // Acquisition
          'https://api.zotero.org/users/9668586/collections/EHMCV6UU/items/top?v=3&key=' + apiKey ,  // Numesthesie
          'https://api.zotero.org/users/9668586/collections/2FDQBJPV/items/top?v=3&key=' + apiKey ,  // Art et culture
          'https://api.zotero.org/users/9668586/collections/SEKUPE78/items/top?v=3&key=' + apiKey ,  // Traitement automatique des langues
          'https://api.zotero.org/users/9668586/collections/ZV9TJ8BE/items/top?v=3&key=' + apiKey ,  // Langage informatique
          'https://api.zotero.org/users/9668586/collections/PED2ABAM/items/top?v=3&key=' + apiKey ,  // test1
          'https://api.zotero.org/users/9668586/collections/IFAV3I23/items/top?v=3&key=' + apiKey ,  // test2
          'https://api.zotero.org/users/9668586/collections/947PZD8A/items/top?v=3&key=' + apiKey ,  // test3

          
  
          
        ];

        collectionUrls.forEach((collectionUrl, index) => {
          fetchZoteroCollection(collectionUrl, 'itemList' + (index + 2));
        });

        document.addEventListener("DOMContentLoaded", function () {
          const imageContainers = document.querySelectorAll(".image-container");

          imageContainers.forEach(imageContainer => {
            imageContainer.addEventListener("mouseover", function () {
              this.classList.add("hovered");
            });

            imageContainer.addEventListener("mouseout", function () {
              this.classList.remove("hovered");
            });
          });
        });

        window.addEventListener('DOMContentLoaded', function () {
          var itemListIds = ['itemList1', 'itemList2', 'itemList3', 'itemList4', 'itemList5', 'itemList6', 'itemList7', 'itemList8', 'itemList9', 'itemList10', 'itemList11', 'itemList12', 'itemList13', 'itemList14', 'itemList15', 'itemList16', 'itemList17', 'itemList18', 'itemList19', 'itemList20', 'itemList21', 'itemList22', 'itemList23', 'itemList24', 'itemList25', 'itemList26', 'itemList27', 'itemList28', 'itemList29'];
          for (var i = 0; i < itemListIds.length; i++) {
            var itemList = document.getElementById(itemListIds[i]);
            if (itemList) {
              itemList.addEventListener('click', function (event) {
                var target = event.target;
                if (target.tagName === 'A') {
                  target.setAttribute('target', '_blank');
                }
              });
            }
          }
        });

        var currentPopup = null; // Variable to store the reference to the current pop-up window

function openLinksInPopup(itemListId, cellColorClass) {
  var itemList = document.getElementById(itemListId).innerHTML;

  // Create a div element to display the content of the links
  var popupContent = document.createElement('div');
  popupContent.innerHTML = itemList;

  // Add styles to the content div
  popupContent.style.backgroundColor = '#fff'; // Container background color: white
  popupContent.style.color = '#000'; // Text color: black
  popupContent.style.padding = '10px'; // Add padding

  // Create a div for the pop-up window
  var popupWindow = document.createElement('div');
  popupWindow.style.position = 'fixed';
  popupWindow.style.top = '50%';
  popupWindow.style.left = '0';
  popupWindow.style.transform = 'translate(0, -50%)';
  popupWindow.style.width = 'auto';
  popupWindow.style.maxWidth = '80%';
  popupWindow.style.maxHeight = '80%';
  popupWindow.style.backgroundColor = '#fff'; // Set the background color to white
  popupWindow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'; // Add a box shadow for a visual effect
  popupWindow.style.overflowY = 'auto'; // Enable vertical scrolling if needed
  popupWindow.style.zIndex = '999'; // Set a higher z-index for overlapping other elements
  popupWindow.classList.add(cellColorClass); // Add the color class for the border

  // Create a close button
  var closeButton = document.createElement('button');
  closeButton.innerHTML = 'x';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.padding = '5px';
  closeButton.style.backgroundColor = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '20px';
  closeButton.style.color = '#000';
  closeButton.style.cursor = 'pointer';

  // Add the close button to the pop-up window
  popupWindow.appendChild(closeButton);

  // Add the popup content directly to the pop-up window
  popupWindow.appendChild(popupContent);

  // Add the pop-up window to the main page
  document.body.appendChild(popupWindow);

  // Add a click event listener to the close button
  closeButton.addEventListener('click', function () {
    // Remove the pop-up window from the main page
    document.body.removeChild(popupWindow);
    // Reset the currentPopup variable
    currentPopup = null;
  });

  // Make the pop-up window draggable
  dragElement(popupWindow);

  // Close the previous pop-up if it exists
  if (currentPopup) {
    document.body.removeChild(currentPopup);
  }

  // Store the reference to the current pop-up
  currentPopup = popupWindow;

  // Function to make an element draggable
  function dragElement(element) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = element.offsetTop - pos2 + 'px';
      element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to each hyperlink in the pop-up content
    var links = popupContent.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        var url = link.getAttribute('href'); // Get the URL from the href attribute
        window.open(url, '_blank'); // Open the link in a new tab
      });
    });

    // Add event listener for category links
    var categories = document.querySelectorAll('.link');
    categories.forEach(function (category) {
      category.addEventListener('click', function () {
        var itemListId = this.getAttribute('data-itemlist');
        openLinksInPopup(itemListId, cellColorClass);
      });
    });
  });
}



        function changeColor(element) {
          if (element.style.color === 'white') {
            element.style.color = 'black';
          } else {
            element.style.color = 'white';
          }
        }


        document.addEventListener('DOMContentLoaded', function () {
          var categories = document.querySelectorAll('.link');
          categories.forEach(function (category) {
            category.addEventListener('click', function () {
              var itemListId = this.getAttribute('data-itemlist');
              openLinksInNewTab(itemListId);
            });
          });
        });

        // Fetches the Zotero collection data and filters the items based on the provided keywords
        function searchZoteroCollection(keywords, allItems) {
          // Count the word frequency in the titles
          const wordFreqMap = {};
          allItems.forEach(item => {
            const itemTitle = item.data.title.toLowerCase();
            const words = itemTitle.split(/\s+/);
            words.forEach(word => {
              if (!["a", "an", "the"].includes(word)) {
                if (wordFreqMap[word]) {
                  wordFreqMap[word]++;
                } else {
                  wordFreqMap[word] = 1;
                }
              }
            });
          });


          // Filter the items based on the keywords in the titles
          let filteredItems = allItems;
          if (keywords.length > 0 && keywords[0].toLowerCase() !== "tout") {
            filteredItems = allItems.filter(item => {
              const itemTitle = item.data.title.toLowerCase();
              return keywords.some(keyword => itemTitle.includes(keyword.toLowerCase()));
            });
          }

          // Display the titles with hyperlinks of the filtered items
          const resultsElement = document.getElementById("results");
          resultsElement.innerHTML = "";

          if (filteredItems.length === 0) {
            resultsElement.textContent = "No results found.";
          } else {
            filteredItems.forEach(item => {
              const itemTitle = item.data.title;
              const itemURL = item.data.url;
              const linkElement = document.createElement("a");
              linkElement.href = itemURL;
              linkElement.textContent = itemTitle;
              linkElement.target = "_blank";
              resultsElement.appendChild(linkElement);
              resultsElement.appendChild(document.createElement("br"));
            });
          }
        }

        // Fetch all items in the Zotero collection
        function fetchAllItems(limit) {
          const apiKey = "yQraJQogHA89BHu3VJBKXLha";
          const collectionId = "TEJRE3BW";
          const apiUrl = `https://api.zotero.org/users/9668586/collections/${collectionId}/items?start=0&limit=${limit}&key=${apiKey}`;

          return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              if (data.length === limit) {
                return fetchAllItemsRecursive(apiKey, collectionId, data, limit);
              } else {
                return data;
              }
            })
            .catch(error => {
              console.error("Error:", error);
              return [];
            });
        }

        // Fetches the remaining items in the Zotero collection recursively
        function fetchAllItemsRecursive(apiKey, collectionId, items, start, limit) {
          const apiUrl = `https://api.zotero.org/users/9668586/collections/${collectionId}/items?start=${start}&limit=${limit}&key=${apiKey}`;

          return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              const allItems = items.concat(data);
              if (data.length === limit) {
                return fetchAllItemsRecursive(apiKey, collectionId, allItems, start + limit, limit);
              } else {
                return allItems;
              }
            })
            .catch(error => {
              console.error("Error:", error);
              return items;
            });
        }

        // Fetches the Zotero collection data and filters the items based on the provided keywords
        function searchZoteroCollection(keywords, allItems, limit) {
          // Filter the items based on the keywords in the titles
          let filteredItems = allItems;
          if (keywords.length > 0 && keywords[0].toLowerCase() !== "tout") {
            filteredItems = allItems.filter(item => {
              const itemTitle = item.data.title.toLowerCase();
              return keywords.some(keyword => itemTitle.includes(keyword.toLowerCase()));
            });
          }

          // Display the titles with hyperlinks of the filtered items
          const resultsElement = document.getElementById("results");
          resultsElement.innerHTML = "";

          const itemsPerPage = 20;
          const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
          let currentPage = 1;

          // Display the results of the first page
          displayResults(currentPage, itemsPerPage, filteredItems, resultsElement);

          // Create the pagination
          createPagination(totalPages, currentPage, itemsPerPage, filteredItems, resultsElement);
        }

        function displayResults(page, itemsPerPage, filteredItems, resultsElement) {
          const startIndex = (page - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const currentPageResults = filteredItems.slice(startIndex, endIndex);

          currentPageResults.forEach(item => {
            const itemTitle = item.data.title;
            const itemURL = item.data.url;
            const linkElement = document.createElement("a");
            linkElement.href = itemURL;
            linkElement.textContent = itemTitle;
            linkElement.target = "_blank";
            resultsElement.appendChild(linkElement);
            resultsElement.appendChild(document.createElement("br"));
          });
        }

    

        // Fetch all items in the Zotero collection and display the initial keyword cloud
        const limit = 100; // Set the desired limit of results per page
        fetchAllItems(limit).then(data => searchZoteroCollection([], data, limit));

        // Function to handle keyword click event
        function handleKeywordClick(keyword) {
          // Set the keyword in the search bar
          document.getElementById("searchInput").value = keyword;

          // Trigger search button click event
          document.getElementById("search-button").click();
        }

        const initialKeywords = [
  "numériques",
  "humanités",
  "digit_hum",
  "sciences",
  "introduction",
  "recherche",
  "bibliothèques",
  "histoire",
  "sociales",
  "humaines",
  "tutoriel",
  "analyse",
  "atelier",
  "cours",
  "documentation",
  "ressources"
];

const keywordCloudElement = document.getElementById("keyword-cloud");
keywordCloudElement.innerHTML = "";

const maxSize = 30;
const minSize = 14;

// Sort the keywords in alphabetical order
initialKeywords.sort();

initialKeywords.forEach((keyword, index) => {
  // Randomly generate the count for demonstration purposes
  const count = Math.floor(Math.random() * 100);

  const fontSize = ((count - 1) / 99) * (maxSize - minSize) + minSize;

  const keywordElement = document.createElement("span");
  keywordElement.classList.add("keyword");
  keywordElement.style.fontSize = `${fontSize}px`;
  keywordElement.textContent = keyword;

  keywordElement.addEventListener("click", () => {
    handleKeywordClick(keyword);
  });

  keywordElement.addEventListener("mouseover", () => {
    keywordElement.classList.add("hover-effect");
  });

  keywordElement.addEventListener("mouseout", () => {
    keywordElement.classList.remove("hover-effect");
  });

  keywordCloudElement.appendChild(keywordElement);

  // Add a space after each keyword except the last one
  if (index !== initialKeywords.length - 1) {
    keywordCloudElement.appendChild(document.createTextNode(" "));
  }
});

function handleKeywordClick(keyword) {
  // Get the search input element
  const searchInput = document.getElementById("searchInput");

  // Set the search input value to the clicked keyword
  searchInput.value = keyword;

  // Perform the search
  searchItems(keyword);
}

function searchItems(keyword) {
  // Replace this with your own search logic
  const filteredItems = initialKeywords.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
  
  // Display the filtered items
  const resultsElement = document.getElementById("results");
  resultsElement.innerHTML = "";
  
  filteredItems.forEach(item => {
    const itemElement = document.createElement("li");
    itemElement.textContent = item;
    resultsElement.appendChild(itemElement);
  });
}



      

        var apiKey = 'yQraJQogHA89BHu3VJBKXLha';
        var userId = '9668586';
        var collectionId = 'TEJRE3BW';
        var limit1 = 10;
        var start = 0;
        var countItems = 0;

        async function zoteroGetTags(startValue) {
  let url = "https://en.wikipedia.org/w/api.php";
  try {
    var apiUrl = `https://api.zotero.org/users/${encodeURIComponent(userId)}/collections/${encodeURIComponent(collectionId)}/tags?format=json&limit=${limit}&start=${startValue}`;
    const response = await fetch(apiUrl, {
      headers: {
        'Zotero-API-Version': '3',
        'Zotero-API-Key': apiKey,
      },
    });
    const data = await response.json();
    
    var tagList = document.getElementById('tagList');
    var myItemList = document.getElementById('myItemList');
    
    var tagPromises = data.map(tag => {
      var tagName = tag.tag;
      var encodedTagName = encodeURIComponent(tagName);
      var tagLink = document.createElement('a');
      tagLink.textContent = tagName;
      tagLink.style.marginRight = '10px';
      tagLink.href = `javascript:void(0);`;
      tagLink.addEventListener('click', function () {
        // Appel à l'API Zotero pour récupérer les items associés à ce tag
        fetch(`https://api.zotero.org/users/${encodeURIComponent(userId)}/collections/${encodeURIComponent(collectionId)}/items?tag=${encodedTagName}&format=json`, {
          headers: {
            'Zotero-API-Version': '3',
            'Zotero-API-Key': apiKey,
          },
        })
          .then(response => response.json())
          .then(items => {
            // Effacer la liste des items précédents
            myItemList.innerHTML = '';

            // Afficher les nouveaux items dans la liste à puces
            items.forEach(item => {
              var itemElement = document.createElement('li');
              var itemLink = document.createElement('a');
              itemLink.textContent = item.data.title;
              itemLink.href = item.data.url;
              itemLink.target = '_blank'; // Ouvrir le lien dans un nouvel onglet
              itemElement.appendChild(itemLink);
              myItemList.appendChild(itemElement);
            });
          });
      });
      tagList.appendChild(tagLink);

      // Retourne une promesse résolue pour que Promise.all fonctionne correctement
      return Promise.resolve();
    });

    await Promise.all(tagPromises);

    tagList.style.height = `${tagList.scrollHeight}px`;


    if (data.length === limit) {
      return (startValue + limit);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des tags de la collection Zotero:', error);
  }
}

        async function repeatedAPICall(apiCall, startValue) {
          const keys = [startValue];
          const result = [];
          data = null;

          for (const callKey of keys) {
            // console.log('callKey ', callKey);
            const data = await apiCall(callKey);
            // console.log('data ', data);
            // result.push(data);
            if (data !== undefined && data !== null) keys.push(data);
          }

          return result;
        }

        repeatedAPICall(zoteroGetTags, 0)
          .then(result => console.log(result)); // use your callbacks here


          var apiKey = 'yQraJQogHA89BHu3VJBKXLha';
        var userId = '9668586';
        var collectionId = 'TEJRE3BW';
        var limit1 = 10;
        var pageSize = 10;
        var start = 0;
        var count = 0;
        var currentPage = 0;
        var nbPages = 0;

        async function zoteroGetItems(startValue, searchQuery) {
            try {
                var apiUrl = `https://api.zotero.org/users/${encodeURIComponent(userId)}/collections/${encodeURIComponent(collectionId)}/items?format=json&limit=${pageSize}&start=${startValue}`;
                if (searchQuery !== '') {
                    apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
                }
                console.log('searchQuery:', searchQuery, 'startValue:', startValue);
                const response = await fetch(apiUrl, {
                    headers: {
                        'Zotero-API-Version': '3',
                        'Zotero-API-Key': apiKey,
                    },
                });
                const data = await response.json();
                console.log('Count:', data.length);
                if (data.length == 0) {
                    return null;
                }
                nbPages++;
                console.log('Retrieved items:', data); // Check the retrieved items in the browser console

                var myItemList1 = document.getElementById('myItemList1');
                
                count = 0;
                data.forEach(item => {
                    var itemElement = document.createElement('li');
                    if (currentPage != nbPages) {
                        itemElement.style.display = 'none';
                    }
                    itemElement.classList.add(`page${nbPages}`);
                    var itemLink = document.createElement('a');
                    itemLink.textContent = item.data.title;
                    itemLink.href = item.data.url;
                    itemLink.target = '_blank';
                    itemElement.appendChild(itemLink);
                    myItemList1.appendChild(itemElement);
                    count++;
                });

                myItemList1.style.height = `${myItemList1.scrollHeight}px`;

                
                if (count == pageSize) {
                    console.log('count == pageSize');
                    return (startValue+count);
                }
                else {
                    // console.log('count != limit');
                    return null;
                }
            } catch (error) {
                console.error('An error occurred while retrieving items from the Zotero collection:', error);
            }
        }

        function searchItems() {
            var searchQuery = document.getElementById('searchInput').value;
            var myItemList1 = document.getElementById('myItemList1');
            myItemList1.innerHTML = '';
            nbPages = 0;
            currentPage = 1;
            repeatedAPICall(startValue => zoteroGetItems(startValue, searchQuery), 0)
                .then(result => console.log(result)); // use your callbacks here
            document.getElementById('currentPage').textContent = currentPage;
        }

        function updatePage(action) {
            if (action === 'previous') {
                if (currentPage > 1) {
                    eltCurrentPage = document.getElementsByClassName(`page${currentPage}`);
                    for (var i = 0; i < eltCurrentPage.length; i++) {
                        eltCurrentPage[i].style.display = 'none';
                    }
                    eltPreviousPage = document.getElementsByClassName(`page${currentPage-1}`);
                    for (var i = 0; i < eltPreviousPage.length; i++) {
                        eltPreviousPage[i].style.display = 'block';
                    }
                    currentPage--;
                    document.getElementById('currentPage').textContent = currentPage;
                }
            } else if (action === 'next') {
                if (currentPage < nbPages) {
                    eltCurrentPage = document.getElementsByClassName(`page${currentPage}`);
                    for (var i = 0; i < eltCurrentPage.length; i++) {
                        eltCurrentPage[i].style.display = 'none';
                    }
                    eltNextPage = document.getElementsByClassName(`page${currentPage+1}`);
                    for (var i = 0; i < eltNextPage.length; i++) {
                        eltNextPage[i].style.display = 'block';
                    }
                    currentPage++;
                    document.getElementById('currentPage').textContent = currentPage;
                }
            }
        }

        async function repeatedAPICall(
            apiCall,
            startValue
        ) {
            const keys = [startValue];
            const result = [];
            data = null;

            for (const callKey of keys) {
                console.log('callKey ', callKey);
                const data = await apiCall(callKey);
                console.log('data ', data);
                // result.push(data);
                if (data !== undefined && data !== null) keys.push(data);
            }

            return result;
        }

function openPopup(title, url) {
  if (currentPopup) {
    document.body.removeChild(currentPopup); // Remove the current popup if it exists
  }

  var popupContent = document.createElement('div');
  popupContent.innerHTML = `<h2>${title}</h2><p>URL: <a href="${url}" target="_blank">${url}</a></p>`;

  var popupWindow = document.createElement('div');
  popupWindow.classList.add('popup');
  popupWindow.appendChild(popupContent);

  document.body.appendChild(popupWindow);

  currentPopup = popupWindow;

  popupWindow.addEventListener('click', function (event) {
    if (event.target === popupWindow) {
      document.body.removeChild(popupWindow); // Remove the popup when clicked outside the content
      currentPopup = null;
    }
  });
}


