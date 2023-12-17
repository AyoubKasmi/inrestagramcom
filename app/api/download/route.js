
export async function POST(request) {
  const { type: fileType, link: fileLink, extension: fileExtension, name: userName } = await request.json();

  if (!fileLink) {
    return Response.json({ error: 'file link is required' }, {
      status: 400,
    });
  }

  // Perform the download logic here
  try {
    const response = await fetch(fileLink);

    if (!response.ok) {
      return Response.json({ error: 'Failed to fetch file' }, {
        status: 500,
      });
    }

    const buffer = await response.arrayBuffer();
    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename=xinstagramx_${userName}.${fileExtension}`,
        'Content-Type': fileType + '/' + fileExtension,
      },
    })

  } catch (error) {
    console.error('Error downloading file:', error);
    return Response.json({ error: 'Internal server error' }, {
      status: 500,
    });
  }
}
  