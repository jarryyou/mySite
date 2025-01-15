# 大文件上传

## 操作步骤

1. 将文件切片
2. 每个切片单独上传
3. 上传完成之后，发送一个合并请求，合并切片

## 代码实现
``` html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>大文件分片上传示例 (fetch API)</title>
</head>
<body>
<input type="file" id="fileInput">
<button id="uploadButton">上传</button>
<script>
document.getElementById('uploadButton').addEventListener('click', async function() {
    const file = document.getElementById('fileInput').files;
    if (!file) {
        alert('请选择一个文件');
        return;
    }

    const chunkSize = 5 * 1024 * 1024; // 5MB per chunk
    const totalChunks = Math.ceil(file.size / chunkSize);
    const uploadUrl = 'http://your-server-url/upload-chunk'; // Replace with your upload endpoint

    for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const start = chunkIndex * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunk = file.slice(start, end);

        try {
            await uploadChunk(chunk, chunkIndex, totalChunks, uploadUrl);
            console.log(`Chunk ${chunkIndex + 1} uploaded successfully`);
        } catch (error) {
            console.error(`Failed to upload chunk ${chunkIndex + 1}:`, error);
            // Handle the error, possibly retry the upload
        }
    }

    console.log('All chunks uploaded successfully');
    // Optionally, send a request to the server to notify it that all chunks have been uploaded
    // and trigger the merging process if necessary.
});

async function uploadChunk(chunk, chunkIndex, totalChunks, uploadUrl) {
    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('chunkIndex', chunkIndex);
    formData.append('totalChunks', totalChunks);

    const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
    }
}
</script>
</body>
</html>
```