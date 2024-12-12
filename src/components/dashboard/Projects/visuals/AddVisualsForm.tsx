'use client';

import { Button } from '@/components/ui/button';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import imagepik from '../../../../../public/image_4942906.png';
import Image from 'next/image';
import { pinata } from '@/lib/pinata';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import useProjects from '@/stores/use-projects';

const AddVisualsForm = ({ closeDialog }: { closeDialog: () => void }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedFilesUrls, setUploadedFilesUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const params = useParams();
  const { name } = params;
  const { addVisuals, projects } = useProjects();

  const handleFileUpload = async () => {
    try {
      setUploading(true);
      const keyRequest = await fetch('/api/key');
      const keyData = await keyRequest.json();
      files.forEach(async (file) => {
        const uploded = await pinata.upload.file(file).key(keyData.JWT);
        const url = await pinata.gateways.convert(uploded.IpfsHash);
        console.log(url);
        addVisuals(name as string, url);
      });

      toast.success(`visuals uploaded successfuly`);
      closeDialog();
      setUploading(false);
    } catch (error) {
      console.log('Error uploading visuals:', error);
      toast.error('Error uploading visuals');
      setUploading(false);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      console.log(acceptedFiles);
      setFiles(acceptedFiles);
      console.log(files);
    },
    [files]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="space-y-4">
      {files.length > 0 ? (
        <div
          className={`${
            files.length === 1 ? 'min-h-[200px]' : 'min-h-[120px'
          }  rounded-lg border overflow-clip`}
        >
          <Preview files={files} />
        </div>
      ) : (
        <div
          {...getRootProps({
            className: `flex flex-col items-center justify-center border border-dashed  ${
              isDragActive ? 'border-myaccentlight' : 'border-mytextlight'
            } rounded-lg p-4 cursor-pointer min-h-[200px]`,
          })}
        >
          <input {...getInputProps()} />

          <div
            className={`flex flex-col items-center ${
              isDragActive ? 'gap-y-6' : 'gap-y-4'
            }`}
          >
            <Image
              src={imagepik}
              alt="image icon"
              className={`size-20 ${isDragActive && 'rotate-12 skew-x-12'}`}
            />
            <div className="text-center text-mytextlight font-body font-semibold">
              <div>
                <p className="text-base font-bold">
                  Drop Your Images here. or{' '}
                  <span className="text-myaccent">Browse</span>
                </p>
                <p className="text-xs">Support: .JPG .PNG .JPEG</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {files.length > 0 && (
        <Button
          onClick={handleFileUpload}
          disabled={uploading}
          type="submit"
          className="text-sm text-mybg font-body  bg-myaccentdark hover:bg-myaccent w-full"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      )}
    </div>
  );
};

export default AddVisualsForm;

const Preview = ({ files }: { files: File[] }) => {
  const previewUrls = files.map((file) => URL.createObjectURL(file));
  const singlePreview = previewUrls.length === 1;
  const singlePreviewUrl = previewUrls[0];

  if (previewUrls.length < 2) {
    console.log('displaying single preview', singlePreviewUrl);

    return (
      <div className="border w-full min-h-[200px] relative">
        <Image
          src={singlePreviewUrl}
          alt="preview image"
          fill
          className="size-full object-cover"
        />
      </div>
    );
  }

  const twoPreviews = [previewUrls[0], previewUrls[1]];

  return (
    <div className="size-full flex flex-wrap p-4 gap-4">
      {twoPreviews.map((previewUrl) => (
        <div
          key={previewUrl}
          className="w-[200px] h-[100px] rounded-md overflow-clip relative cursor-pointer hover:ring-2 hover:ring-myaccentlight/40 ring-offset-4"
        >
          <Image
            src={previewUrl}
            alt="preview image"
            fill
            className="size-full object-cover"
          />
        </div>
      ))}
      {previewUrls.length > 2 && (
        <div className="grid place-content-center w-[200px] h-[100px] rounded-md overflow-clip relative border text-sm text-mytextlight font-body font-semibold cursor-pointer group">
          <p className="group-hover:text-mytext group-hover:underline">
            {`+${previewUrls.length - 2} More`}
          </p>
        </div>
      )}
    </div>
  );
};
