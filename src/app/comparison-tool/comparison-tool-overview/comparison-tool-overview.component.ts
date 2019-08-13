import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-tool-overview',
  templateUrl: './comparison-tool-overview.component.html',
  styleUrls: ['./comparison-tool-overview.component.scss']
})
export class ComparisonToolOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

export interface ISnapshot {
  buildId: string;
  snapshotId: string; // uuid
  snapshotReferenceId: string;
  snapshotReference: ISnapshotReference;
  masterScreenshotId: string; // This would refer to the images collection
  masterScreenshot: IScreenshot;
  screenshotId: string;
  screenshot: IScreenshot;
  screenshotDiffId: string;
  screenshotDiff: IScreenshot;
}

interface IScreenshot {
  buildId: string;
  screenshotId: string;
  type: TScreenshotType;
  path: string;
  userAgent: IUserAgent;
}

interface ISnapshotReference {
  snapshotReferenceId: string;
  area: string; // example Wealth Detail
  state: string; // example Wealth Detail Performance or DatePicker open
  masterScreenshotId: string; // This would refer to the images collection
  masterScreenshot: IScreenshot;
  userAgent: IUserAgent;
}

interface IUserAgent {
  browser: string;
  os: string;
  os_version: string;
  deviceName: string;
}

type TScreenshotType = 'master' | 'diff' | 'current';
/**
 * 1. We hit the startBuild endpoint to get the buildId. Test runs a spec then creates a screenshot
 * 2. This screenshot needs to be uploaded with a buildId + area + state + userAgent
 * 3. Save the image and hold the screenshotId in memory for next steps.
 * 4. With the info reveceived from previous step the server lookups the snapshotreference.
 *    If it doesn exist it will create new one in the snapshotReference collection.
 * 5. Now it will save the image on the server and makes an entry in the screenshots collection.
 * 6. The screenshot is now compared to the master screenshot. If there is a difference it will be saved.
 * 7. All of this info will then be saved to the snapshot collection.
 * 8. When navigating to a build it will get the snapshot collection with all the relevant data.
 * 9. User
 * 10. Once testing is done we hit end build endpoint.
 */
