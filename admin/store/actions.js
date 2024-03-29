import { get, isEmpty, isBuffer } from "lodash";
import axios from "axios";

//----------------------- Auth -----------------------//
export async function authLogin(
    { dispatch, commit },
    { data, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/auth/local`,
      method: "POST",
      data,
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function authCheck(
    { dispatch, commit },
    { userId, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/auth/check/${userId}`,
      method: "GET"
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}
//----------------------- Auth -----------------------//

//---------------------- User ----------------------//
export async function getUserList(
    { dispatch, commit },
    { onSuccess, onError }
) {
    return await axios({
        url: `${process.env.baseAPI}/user/get-all`,
        method: "GET",
        headers: {}
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function getUser(
    { dispatch, commit },
    { userId, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/user/${userId}`,
        method: "GET"
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function createUser(
    { dispatch, commit },
    { data, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/user/`,
      method: "POST",
      data,
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function updateUser(
    { dispatch, commit },
    { data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/user/`,
        method: "PUT",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function deleteUser(
    { dispatch, commit },
    { userId, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/user/${userId}`,
      method: "DELETE",
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}
//---------------------- User ----------------------//

//---------------------- Course ----------------------//
export async function getCourseList(
    { dispatch, commit },
    { onSuccess, onError }
) {
    return await axios({
        url: `${process.env.baseAPI}/course/get-all`,
        method: "GET",
        headers: {}
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function getCourse(
    { dispatch, commit },
    { courseId, data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/course/${courseId}`,
        method: "GET",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function createCourse(
    { dispatch, commit },
    { data, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/course/`,
      method: "POST",
      data,
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function updateCourse(
    { dispatch, commit },
    { data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/course/`,
        method: "PUT",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function deleteCourse(
    { dispatch, commit },
    { courseId, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/course/${courseId}`,
      method: "DELETE",
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}
//---------------------- Course ----------------------//

//---------------------- Media ----------------------//
export async function getMediaList(
    { dispatch, commit },
    { onSuccess, onError }
) {
    return await axios({
        url: `${process.env.baseAPI}/media/get-all`,
        method: "GET",
        headers: {}
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function getMedia(
    { dispatch, commit },
    { mediaId, data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/media/${mediaId}`,
        method: "GET",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function uploadMedia(
    { dispatch, commit },
    { data, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/media/`,
      method: "POST",
      data,
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function updateMedia(
    { dispatch, commit },
    { mediaId, data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/media/${mediaId}`,
        method: "PUT",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function deleteMedia(
    { dispatch, commit },
    { mediaId, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/media/${mediaId}`,
      method: "DELETE",
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}
//---------------------- Media ----------------------//

//---------------------- Transaction ----------------------//
export async function getTransactionList(
    { dispatch, commit },
    { userId, onSuccess, onError }
) {
    return await axios({
        url: `${process.env.baseAPI}/trans/get-all/${userId}`,
        method: "GET",
        headers: {}
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function getTransaction(
    { dispatch, commit },
    { tranId, data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/trans/${tranId}`,
        method: "GET",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function createTransaction(
    { dispatch, commit },
    { data, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/trans/`,
      method: "POST",
      data,
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}

export async function updateTransaction(
    { dispatch, commit },
    { tranId, data, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/trans/${tranId}`,
        method: "PUT",
        data
      })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

export async function deleteTransaction(
    { dispatch, commit },
    { mediaId, onSuccess, onError }
) {
    return await axios({
      url: `${process.env.baseAPI}/trans/${tranId}`,
      method: "DELETE",
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return data;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
                onError(e.response.data);
            }
        }
    });
}
//---------------------- Transaction ----------------------//

//---------------------- Chat ----------------------//
export async function getChatRooms(
    { dispatch, commit },
    { userId, onSuccess, onError }
) { 
    return await axios({
        url: `${process.env.baseAPI}/chat-room/${userId}`,
        method: "GET"
    })
    .then(res => {
        const data = res.data;
        if (res.status >= 200 && res.status <= 299) {
            onSuccess(data);
        } else {
            onError(data);
        }
        return res;
    })
    .catch(e => {
        if (e.response) {
            if (e.response.status < 200 || e.response.status > 299) {
            onError(e.response.data);
            }
        }
    });
}

