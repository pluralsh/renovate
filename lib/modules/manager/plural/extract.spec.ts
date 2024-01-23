import { extractPackageFile } from '.';

jest.mock('../../../util/fs');

describe('modules/manager/plural/extract', () => {
  describe('extractPackageFile()', () => {
    it('skips invalid registry urls', () => {
      const content = `
      apiVersion: v2
      appVersion: "1.0"
      description: A Helm chart for Kubernetes
      name: example
      version: 0.1.0
      dependencies:
        - name: redis
          version: 0.9.0
          repository: '@placeholder'
        - name: postgresql
          version: 0.8.1
          repository: nope
        - name: broken
          version: 0.8.1
      `;
      const fileName = 'Chart.yaml';
      const result = extractPackageFile(content, fileName);
      expect(result).not.toBeNull();
      expect(result).toMatchSnapshot();
      expect(result?.deps.every((dep) => dep.skipReason)).toBe(true);
    });
  });
});
